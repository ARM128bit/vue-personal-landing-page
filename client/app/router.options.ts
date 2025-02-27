import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/client/pages/home/index.vue').then(r => r)
    },
    {
      name: 'Experience',
      path: '/experience',
      component: () => import('@/client/pages/experience/index.vue')
    }
  ],
};
