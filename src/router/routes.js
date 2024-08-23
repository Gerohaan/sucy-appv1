
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/auth/loginPage.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayoutAuth.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('pages/dashboard/indexDashboard.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'sucy',
        name: 'sucy',
        component: () => import('pages/sucys/indexSucy.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('pages/categories/indexCategories.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'types',
        name: 'types',
        component: () => import('pages/types/indexTypes.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('pages/users/indexUsers.vue'),
        meta: {
          authRequired: true,
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
