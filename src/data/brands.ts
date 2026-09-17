import type { CollectionEntry } from 'astro:content';

export const brandOrderMap: Record<string, number> = {
  breezenet: 1,      // 微风网络 Breezenet
  feimaoyun: 2,      // 飞猫云
  muguangwangluo: 3, // 暮光网络
  firefly: 4,        // Firefly机场
  lingmao: 5,        // 灵猫
  flashleap: 6,      // 闪跃 FlashLeap
  wuyoulianjie: 7,   // 无忧链接
  kuajieyun: 8,      // 跨界云
  weituyun: 9,       // 唯兔云
  xingdaomeng: 10,   // 星岛梦
  u1s1: 11,          // U1S1
  lightspeed: 12,    // 光速云 LightSpeed
  quanqiuyun: 13,    // 全球云
  guangnianti: 14,   // 光年梯
  jilianyun: 15,     // 极连云
  sogoyun: 16,       // Sogo云
  feiv: 17,          // 飞V
  wavenet: 18,       // 浪网 WaveNet
  yinxingren: 19,    // 隐形人
  kuaili: 20,        // 快狸 KuaiLi
  ermaoyun: 21,      // 二猫云
  tiziyun: 22,       // 梯子云
  sujie: 23,         // 速界 SuJie
};

export function sortBrands(brands: CollectionEntry<'brands'>[]): CollectionEntry<'brands'>[] {
  return [...brands].sort((a, b) => {
    const orderA = brandOrderMap[a.slug] ?? 999;
    const orderB = brandOrderMap[b.slug] ?? 999;
    return orderA - orderB;
  });
}
