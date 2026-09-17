export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export const headerNav: NavItem[] = [
  { title: '首页', href: '/' },
  { title: '博客文章', href: '/blog' },
  { title: '机场排行', href: '/ranking' },
  { title: '稳定机场', href: '/stable' },
  { title: '便宜机场', href: '/cheap' },
  { title: '品牌库', href: '/brands' },
  { title: '优惠券专区', href: '/coupons' },
  { title: '关于本站', href: '/about' },
];

export const footerNav = {
  columns: [
    {
      title: '核心推荐',
      items: [
        { title: '最新博客', href: '/blog' },
        { title: '机场排行', href: '/ranking' },
        { title: '稳定机场推荐', href: '/stable' },
        { title: '便宜性价比机场', href: '/cheap' },
      ],
    },
    {
      title: '热门分类',
      items: [
        { title: '品牌词库', href: '/brands' },
        { title: '新手教程', href: '/category/tutorial' },
        { title: '深度评测', href: '/category/review' },
        { title: '常见解答', href: '/category/faq' },
      ],
    },
    {
      title: '关于与声明',
      items: [
        { title: '关于我们', href: '/about' },
        { title: '优惠券专区', href: '/coupons' },
      ],
    },
  ],
};
