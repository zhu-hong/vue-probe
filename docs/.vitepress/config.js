export default {
  title: 'VueProbe',
  lang: 'zh-CN',
  description: '我的自定义插件/组件库，主要用于学习',
  themeConfig: {
    logo: '/logo.svg',
    sidebar: [
      {
        text: '介绍',
        link: '/guide/',
      },
      {
        text: '组件',
        children: [
          {
            text: '虚拟滚动',
            link: '/guide/virtual-scroll/',
          },
        ],
      },
      {
        text: '插件',
        children: [
          {
            text: '图片懒加载',
            link: '/guide/lazyload/',
          },
        ],
      },
    ],
    nav: [
      {
        text: '个人网站',
        link: 'https://ws-zh.vercel.app/',
      },
    ],
  },
}