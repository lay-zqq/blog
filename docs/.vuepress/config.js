const nav = require('./utils/nav.js')
const { ua }  = require('./ua.js')
const { webpackSidebar, vueAnalysisSidebar, vueNextAnalysisSidebar } = nav
module.exports = {
  title: '曾同学',
  description: '曾同学的个人博客',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [...ua]
  ],
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/lay-zqq/blog',
    repoLabel: 'Github',
    nav: [
      {
        text: '开发bug解放方法',
        link: '/solveBug/'
      },
      {
        text: '88', 
        link: '/interview/'
      },
    ],
    sidebar: {
      '/webpack/webpack/': [webpackSidebar],
      '/vueAnalysis/': vueAnalysisSidebar,
      '/vueNextAnalysis/': vueNextAnalysisSidebar,
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@vuepress': '../images/vuepress',
        '@components': '../.vuepress/components'
      }
    }
  }
}
