import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView.vue'
import PostView from '@/views/PostView.vue'
import AuthorView from '@/views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsView
    },
    { path: '/post/:id', name: 'post', component: PostView },
    {
      path: '/authors',
      name: 'authors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthorsView.vue')
    },
    { path: '/author/:username', name: 'author', component: AuthorView }
  ]
})

export default router
