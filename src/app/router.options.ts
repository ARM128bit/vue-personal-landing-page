import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig> {
  routes: (_routes) => [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/home').then(r => r.HomePage || r)
      },
      {
          name: 'Experience',
          path: '/experience',
          component: () => import('@/pages/experience').then(r => r.Experience || r)
        }
  ],
};
