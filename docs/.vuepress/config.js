module.exports = {
  title: '我的技术文档',
  description: '基于 VuePress 的文档网站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    sidebar: [
      '/',
      '/guide/',
    ],
  },
};
