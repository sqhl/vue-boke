import TodoList from '../view/test/TodoList.vue'
import Hello from '../view/test/Hello.vue'
import Redict from '../view/test/Redict.vue'

import templet from '../view/main/templet.vue'
import next from '../view/login'
import index from '../view/right/index'
import about from '../view/right/about'
import words from '../view/right/words'
import detail from '../view/right/details'
import live from '../view/right/live'
import video from '../view/right/video'
import pic from '../view/right/imgs'
import chat from '../view/right/varchat'

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/index',
    meta: {
      title: 'main',
      hideInMenu: true,
      dispark: true
    },
    component: templet,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '随便看看鸭~',
          hideInMenu: true,
          dispark: true
        },
        component: index
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: '关于xiao破站',
          hideInMenu: true,
          dispark: true
        },
        component: about
      },
      {
        path: '/detail',
        name: 'detail',
        meta: {
          title: '详情页',
          hideInMenu: true,
          dispark: true
        },
        component: detail
      },
      {
        path: '/words',
        name: 'words',
        meta: {
          title: '你要留言ma?',
          hideInMenu: true,
          dispark: true
        },
        component: words
      },
      {
        path: '/live',
        name: 'live',
        meta: {
          title: '快来直播ya~',
          hideInMenu: true,
          dispark: true
        },
        component: live
      },
      {
        path: '/video',
        name: 'video',
        meta: {
          title: '视频哒~',
          hideInMenu: true,
          dispark: true
        },
        component: video
      },
      {
        path: '/pic',
        name: 'pic',
        meta: {
          title: '图包哒~',
          hideInMenu: true,
          dispark: true
        },
        component: pic
      },
      {
        path: '/chat',
        name: 'chat',
        meta: {
          title: '微聊天哒~',
          hideInMenu: true,
          dispark: true
        },
        component: chat
      }
    ]
  },
  {
    path: '/login_next',
    name: 'login_next',
    meta: {
      title: '邮箱登记后你就是我的好朋友',
      hideInMenu: true,
      dispark: true
    },
    component: next
  },
  {
    path: '/todolist',
    name: 'todolist',
    meta: {
      title: 'todolist例子',
      hideInMenu: true,
      dispark: true
    },
    component: TodoList
  },
  {
    path: '/hello',
    name: 'hello world',
    meta: {
      title: 'todolist例子',
      hideInMenu: true,
      dispark: true
    },
    component: Hello
  },
  {
    path: '/redict',
    name: 'redict',
    meta: {
      title: 'redict测试',
      hideInMenu: true,
      dispark: true
    },
    component: Redict
  }
]
