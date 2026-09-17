export interface SiteConfig {
  name: string;
  domain: string;
  description: string;
  author: string;
  language: string;
  social: {
    github?: string;
    twitter?: string;
    telegram?: string;
  };
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: '十大机场评测与指南',
  domain: 'https://shidajichang.vip',
  description: '专业的中文网络服务评测与技术指南平台，提供深度评测、对比分析、长尾解答与行业动态指南。',
  author: '十大机场评测编辑部',
  language: 'zh-CN',
  social: {
    github: 'https://github.com/ksugiono187/shidajichang.vip',
    telegram: 'https://t.me/Hy_0027',
  },
  disclaimer: '本站所有内容仅用于技术交流与评测分析，不提供任何真实商业推广及侵权服务。',
};
