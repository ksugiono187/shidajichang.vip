export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categoriesMeta: Record<string, CategoryMeta> = {
  tutorial: {
    slug: 'tutorial',
    name: '新手教程',
    description: '从入门到精通的保姆级设置与应用指南，帮助您快速掌握使用技巧。',
    icon: 'BookOpen',
  },
  review: {
    slug: 'review',
    name: '深度测评',
    description: '多维度实测数据与客观评测报告，涵盖稳定性、速率与性价比。',
    icon: 'ShieldCheck',
  },
  comparison: {
    slug: 'comparison',
    name: '横向对比',
    description: '对比不同服务品牌与方案特点，助您选择最适合的解决方案。',
    icon: 'Scale',
  },
  faq: {
    slug: 'faq',
    name: '常见解答',
    description: '针对用户高频遇到的长尾技术疑问与故障排查进行详尽解答。',
    icon: 'HelpCircle',
  },
};

export function getCategoryMeta(key: string): CategoryMeta {
  if (categoriesMeta[key]) return categoriesMeta[key];
  const match = Object.values(categoriesMeta).find((c) => c.name === key || c.slug === key);
  if (match) return match;
  return {
    slug: key,
    name: key,
    description: `包含“${key}”主题下的所有深度评测与指南文章。`,
    icon: 'HelpCircle',
  };
}
