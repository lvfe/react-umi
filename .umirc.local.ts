export default {
    routes: [
        { path: '/', component: '@/pages/layout/SecurityLayout', routes: [
            { path: '/', component: '@/pages/index' },
            { path: '/olist', component: '@/pages/olist/index' },
            { path: '/user', component: '@/pages/user/index' },
        ] },
        { path: '/login', component: '@/pages/login/index' },
      ],
}