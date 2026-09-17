export interface CouponInfo {
  label: string;
  code: string;
  verifiedAt: string;
  updatedAt: string;
  expiresAt: string;
  source: string;
  verified: boolean;
}

export const couponData: Record<string, CouponInfo> = {
  breezenet: {
    label: '七折专属优惠券',
    code: 'weifeng90',
    verifiedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    expiresAt: '长期有效',
    source: '官方独家',
    verified: true,
  },
  feimaoyun: {
    label: '八折全场通用券',
    code: 'flycat888',
    verifiedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  wuyoulianjie: {
    label: '八折新品特惠券',
    code: 'wuyou666',
    verifiedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  flashleap: {
    label: '八折专线体验券',
    code: 'shanyue',
    verifiedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    expiresAt: '长期有效',
    source: '官方独家',
    verified: true,
  },
  firefly: {
    label: '八折全场通用券',
    code: 'firefly',
    verifiedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  quanqiuyun: {
    label: '八折年付特惠券',
    code: 'tt88',
    verifiedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  ermaoyun: {
    label: '八五折立减优惠券',
    code: 'ermao888',
    verifiedAt: '2026-09-14',
    updatedAt: '2026-09-14',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  lightspeed: {
    label: '九折千兆突发券',
    code: 'jichangcha09',
    verifiedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    expiresAt: '长期有效',
    source: '官方独家',
    verified: true,
  },
  weituyun: {
    label: '九折初尝优惠券',
    code: 'rabbit',
    verifiedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  xingdaomeng: {
    label: '九折专线尝鲜券',
    code: 'nmw888',
    verifiedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
  u1s1: {
    label: '八折平价立减券',
    code: 'U1S1',
    verifiedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    expiresAt: '长期有效',
    source: '官方渠道',
    verified: true,
  },
};
