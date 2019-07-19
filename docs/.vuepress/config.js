let path = require('path')
let fs =require('fs')
module.exports = {
  plugins:['@vuepress/back-to-top'] ,
  base:'/document/',
  title: 'ieast docs',
  description: 'Welcome to ieast docs',
  themeConfig: {
    lastUpdated: '上次更新时间',
    sidebarDepth:1,
    // displayAllHeaders: false,
    sidebar: {
      '/black/node/': [
        {
          title: 'node',
          collapsable:false,
          children: ['/black/node/']
        },
        {
          title: 'java',
          collapsable:false,
          children: getSidebarconfig('black/node',true)
        }
      ],
      '/black/java/': [
        {
          title: '介绍',
          collapsable:false,
          children: ['/black/java/']
        },
        {
          title: 'java',
          collapsable:false,
          children: getSidebarconfig('black/java',true)
        }
      ],
      '/front/css/': [
        {
          title: '介绍',
          collapsable:false,
          children: ['/front/css/']
        },
        {
          title: 'css',
          collapsable:false,
          // children: ['/front/css/css1.md','/front/css/css2.md']
          children: getSidebarconfig('front/css',true)
          
        },
        // {
        //   title: 'javascript',
        //   collapsable:false,
        //   children: getSidebarconfig('front/javascript',true)
        // }
      ],
      '/front/javascript/': [
        {
          title: '介绍',
          collapsable:false,
          children: ['/front/javascript/']
        },
        {
          title: 'javascript',
          collapsable:false,
          children: getSidebarconfig('front/javascript',true)
          // children: ['/front/javascript/introduction.md','/front/javascript/es6.md']
        }
      ],
      '/components/' : [
        {
          title: '快速开始',
          collapsable:false,
          children: ['/components/introduction.md']
          // children:getSidebarconfig('components/introduction',false)
        },
        {
          title: 'UI组件',
          collapsable:false,
          children: getSidebarconfig('components/UI',true)
        }
      ],
      '/read/':[
        {
          title: '阅读',
          collapsable:false,
          children: ['/read/introduction.md']
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
      { text: '组件', link: '/components/' },
      { text: '前端开发', items: [
        {text: "css", link: "/front/css/"},
        {text: "javaspcript", link: "/front/javascript/"}
      ] },
      { text: '后端开发', items: [
        {text: "node", link: "/black/node/"},
        {text: "java", link: "/black/java/"}
      ] },
      { text: '阅读', link: '/read/' },
      { text: 'Github', link: 'https://github.com/json1204' },
    ]
  },
  sass: { indentedSyntax: true }
}

function getSidebarconfig(dir,hasSub) {
  let p =path.join(__dirname,'../',dir)
  let files = fs.readdirSync(p)
  let subDir = hasSub ? dir.split('/')[1]:''
  let subDirFirst = hasSub ? dir.split('/')[0]:''
  files = files.map(item=> {
    if(item==='README.md'){
      item=''
    }else{
      item = subDir ? `/${subDirFirst}/`+subDir+ '/' + path.basename(item,'.md')+'.md':dir.split('/')[0]?'/'+dir.split('/')[0]+'/'+path.basename(item,'.md')+'.md': path.basename(item,'.md')+'.md'
      return item
    }
  })
  console.log(files,'files---');
  
  return files.filter(function(s){return s&&s.trim()})
}