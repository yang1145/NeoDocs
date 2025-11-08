import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "NeoDocs",
  description: "Minecraft 服务器搭建指南文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '配置', link: '/config/server-properties' },
      { text: '插件', link: '/plugins/introduction' }
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '简介', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '系统要求', link: '/guide/requirements' }
        ]
      },
      {
        text: '服务器配置',
        items: [
          { text: 'server.properties', link: '/config/server-properties' },
          { text: '性能优化', link: '/config/performance' },
          { text: '安全设置', link: '/config/security' }
        ]
      },
      {
        text: '插件使用',
        items: [
          { text: '插件介绍', link: '/plugins/introduction' },
          { text: '常用插件', link: '/plugins/popular' },
          { text: '插件安装', link: '/plugins/installation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeoDocs-Team/NeoDocs' }
    ]
  }
})
