import { getBrandBenchmark } from '../data/benchmarks';
import { brandDetailsMap } from '../data/brandDetails';

export interface ScoreBreakdown {
  stabilityScore: number;     // 线路稳定性 (40%)
  compatibilityScore: number; // 协议与全端适配 (20%)
  unlockScore: number;        // IP 出口与流媒体/AI 解锁 (20%)
  valueScore: number;         // 性价比与套餐透明度 (20%)
  overallScore: number;       // 综合总得分 (10.0 满分)
  formulaDescription: string;
}

/**
 * Quantitatively calculates brand rating based on benchmark JSON raw datasets
 * and standardized evaluation weights (Option B Score Calculation Engine).
 */
export function calculateBrandScore(slug: string): ScoreBreakdown {
  const benchmark = getBrandBenchmark(slug);
  const spec = brandDetailsMap[slug];

  const avgPing = benchmark?.summary.avgPingMs ?? 45;
  const packetLoss = benchmark?.summary.avgPacketLossPercent ?? 0.1;
  const maxSpeed = benchmark?.summary.maxDownloadMbps ?? 450;
  const unlockRateStr = benchmark?.summary.streamingUnlockRate ?? '95%';

  // 1. Stability Score (40% Weight)
  // Ping component (30-90ms range normalized to 6.0-10.0)
  const pingSub = Math.max(6.0, Math.min(10.0, 10.0 - ((avgPing - 30) / 15)));
  // Loss component (0.0% - 3.0% range normalized to 5.0-10.0)
  const lossSub = Math.max(5.0, Math.min(10.0, 10.0 - (packetLoss * 2.5)));
  // Speed component (100Mbps - 800Mbps range normalized to 6.5-10.0)
  const speedSub = Math.max(6.5, Math.min(10.0, 6.5 + (maxSpeed / 200)));

  const stabilityScore = Number((pingSub * 0.4 + lossSub * 0.3 + speedSub * 0.3).toFixed(1));

  // 2. Compatibility Score (20% Weight)
  // Evaluates protocol diversity & device coverage
  const protocolText = spec?.protocols || 'VLESS-Reality / Hysteria2';
  let protoBonus = 0;
  if (protocolText.includes('VLESS-Reality')) protoBonus += 0.3;
  if (protocolText.includes('Hysteria2')) protoBonus += 0.3;
  if (protocolText.includes('IEPL') || protocolText.includes('BGP')) protoBonus += 0.3;
  const compatibilityScore = Number(Math.min(9.8, 8.8 + protoBonus).toFixed(1));

  // 3. Unlock & IP Cleanliness Score (20% Weight)
  const unlockRateNum = parseFloat(unlockRateStr) || 95;
  const unlockScore = Number(Math.min(9.9, Math.max(7.5, (unlockRateNum / 10.0))).toFixed(1));

  // 4. Value & Price Transparency Score (20% Weight)
  // Evaluates plan pricing & multiplier transparency
  let valueScore = 9.2;
  if (spec?.multiplier?.includes('透明') || spec?.multiplier?.includes('1.0x')) {
    valueScore += 0.4;
  }
  if (spec?.price?.includes('¥8') || spec?.price?.includes('¥9') || spec?.price?.includes('¥10')) {
    valueScore += 0.2;
  }
  valueScore = Number(Math.min(9.8, valueScore).toFixed(1));

  // 5. Overall Weighted Formula: 40% Stability + 20% Compatibility + 20% Unlock + 20% Value
  const rawWeighted = (stabilityScore * 0.40) + (compatibilityScore * 0.20) + (unlockScore * 0.20) + (valueScore * 0.20);
  const overallScore = Number(rawWeighted.toFixed(1));

  return {
    stabilityScore,
    compatibilityScore,
    unlockScore,
    valueScore,
    overallScore,
    formulaDescription: `Overall = (Stability × 40%) + (Compatibility × 20%) + (Unlock × 20%) + (Value × 20%)`,
  };
}
