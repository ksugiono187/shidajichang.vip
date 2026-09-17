import breezenet from './benchmarks/breezenet.json';
import feimaoyun from './benchmarks/feimaoyun.json';
import muguangwangluo from './benchmarks/muguangwangluo.json';
import firefly from './benchmarks/firefly.json';
import lingmao from './benchmarks/lingmao.json';
import flashleap from './benchmarks/flashleap.json';
import wuyoulianjie from './benchmarks/wuyoulianjie.json';
import kuajieyun from './benchmarks/kuajieyun.json';
import weituyun from './benchmarks/weituyun.json';
import xingdaomeng from './benchmarks/xingdaomeng.json';
import u1s1 from './benchmarks/u1s1.json';
import lightspeed from './benchmarks/lightspeed.json';
import quanqiuyun from './benchmarks/quanqiuyun.json';
import guangnianti from './benchmarks/guangnianti.json';
import jilianyun from './benchmarks/jilianyun.json';
import sogoyun from './benchmarks/sogoyun.json';
import feiv from './benchmarks/feiv.json';
import wavenet from './benchmarks/wavenet.json';
import yinxingren from './benchmarks/yinxingren.json';
import kuaili from './benchmarks/kuaili.json';
import ermaoyun from './benchmarks/ermaoyun.json';
import tiziyun from './benchmarks/tiziyun.json';
import sujie from './benchmarks/sujie.json';

export interface NodeRecord {
  nodeName: string;
  protocol: string;
  pingMs: number;
  jitterMs: number;
  packetLossPercent: number;
  downloadMbps: number;
  uploadMbps: number;
  firstFrameMs: number;
  ipType: string;
  streamingUnlock: string[];
}

export interface BrandBenchmarkData {
  brandSlug: string;
  brandName: string;
  testDate: string;
  testTime: string;
  testLocation: string;
  isp: string;
  clientApp: string;
  mode: string;
  summary: {
    avgPingMs: number;
    avgPacketLossPercent: number;
    maxDownloadMbps: number;
    streamingUnlockRate: string;
  };
  records: NodeRecord[];
}

export const brandBenchmarksMap: Record<string, BrandBenchmarkData> = {
  breezenet: breezenet as BrandBenchmarkData,
  feimaoyun: feimaoyun as BrandBenchmarkData,
  muguangwangluo: muguangwangluo as BrandBenchmarkData,
  firefly: firefly as BrandBenchmarkData,
  lingmao: lingmao as BrandBenchmarkData,
  flashleap: flashleap as BrandBenchmarkData,
  wuyoulianjie: wuyoulianjie as BrandBenchmarkData,
  kuajieyun: kuajieyun as BrandBenchmarkData,
  weituyun: weituyun as BrandBenchmarkData,
  xingdaomeng: xingdaomeng as BrandBenchmarkData,
  u1s1: u1s1 as BrandBenchmarkData,
  lightspeed: lightspeed as BrandBenchmarkData,
  quanqiuyun: quanqiuyun as BrandBenchmarkData,
  guangnianti: guangnianti as BrandBenchmarkData,
  jilianyun: jilianyun as BrandBenchmarkData,
  sogoyun: sogoyun as BrandBenchmarkData,
  feiv: feiv as BrandBenchmarkData,
  wavenet: wavenet as BrandBenchmarkData,
  yinxingren: yinxingren as BrandBenchmarkData,
  kuaili: kuaili as BrandBenchmarkData,
  ermaoyun: ermaoyun as BrandBenchmarkData,
  tiziyun: tiziyun as BrandBenchmarkData,
  sujie: sujie as BrandBenchmarkData,
};

export function getBrandBenchmark(slug: string): BrandBenchmarkData | undefined {
  return brandBenchmarksMap[slug];
}
