let path = require('path')
let fs =require('fs')
module.exports = {
  base:'/document/',
  title: 'ieast docs',
  description: 'Welcome to my docs',
  themeConfig: {
    sidebarDepth:3,
    displayAllHeaders: false,
    sidebar: {
      '/black/': [
        'introduction',
        {
          title: 'node',
          collapsable:false,
          children: getSidebarconfig('black/node',true)
        },
        {
          title: 'java',
          collapsable:false,
          children: getSidebarconfig('black/java',true)
        }
      ],

      '/front/': [
        'introduction',
        {
          title: 'css',
          collapsable:false,
          children: getSidebarconfig('front/css',true)
        },
        {
          title: 'javascript',
          collapsable:false,
          children: getSidebarconfig('front/javascript',true)
        }
      ],
      '/components/' : [
        'introduction',
        {
          title: 'UI组件',
          collapsable:false,
          children: getSidebarconfig('components/UI',true)
        }
      ],

      // fallback
      '/': [
        '',        /* / */
        'about'    /* /about.html */
      ]
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/introduction' },
      { text: '前端开发', items: [
        {text: "css", link: "/front/css/introduction"},
        {text: "javaspcript", link: "/front/javascript/introduction"}
      ] },
      { text: '后端开发', items: [
        {text: "node", link: "/black/node/introduction"},
        {text: "java", link: "/black/java/introduction"}
      ] },
      { text: '阅读', link: '/read/introduction' },
      { text: 'Github', link: 'https://github.com/json1204' },
    ]
  }
}

function getSidebarconfig(dir,hasSub) {
  let p =path.join(__dirname,'../',dir)
  let files = fs.readdirSync(p)
  let subDir = hasSub ? dir.split('/')[1]:''
  files = files.map(item=> {
    item = subDir ? subDir+ '/' + path.basename(item,'.md'): path.basename(item,'.md')
    return item
  })
  return files
}