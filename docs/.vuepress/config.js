/*
 * @Author: zengqq zengqq@minstone.com.cn
 * @Date: 2022-05-09 16:33:30
 * @LastEditors: zengqq zengqq@minstone.com.cn
 * @LastEditTime: 2022-05-13 09:54:42
 * @FilePath: \blog\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const nav = require('./utils/nav.js')
const { ua }  = require('./ua.js')
const navConfig = require('./configs/nav.js') 
const sidebarConfig = require('./configs/sidebar.js')
const { technologyStackNav } = navConfig
const {JavaScriptSidebar} = sidebarConfig
module.exports = {
  title: '归零',
  description: '归零的个人博客',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [...ua]
  ],
  port: 3000,
  markdown: {
    // lineNumbers: false
    code: {
      lineNumbers: false
    }
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/lay-zqq/blog',
    repoLabel: 'Github',
    nav: [
      {
        text: '面试题',
        link: '/interview/'
      },
      // ...technologyStackNav
      {
        text: '前端技术栈',
        items: [
        { text: 'Javascript', link: '/javascript/base/' }, 
        { text: 'SASS', link: '/knowledge/' }, 
        ]
      }, 
      // {
      //   text: '88', 
      //   link: '/interview/'
      // },
      // {
      //   text: '开发技巧',
      //   link: '/developmentSkills/'
      // }
    ],
    sidebar: {
      // '/javascript/base/': [JavaScriptSidebar],
      // '/vueAnalysis/': vueAnalysisSidebar,
      // '/vueNextAnalysis/': vueNextAnalysisSidebar,
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
