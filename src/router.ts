import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Daily Choice List | Licensed UK Online Casino Comparison 2026' } },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FaqView.vue'),
    meta: { title: 'FAQ | Daily Choice List' },
  },
  {
    path: '/responsible-gambling',
    name: 'responsible',
    component: () => import('@/views/ResponsibleGamblingView.vue'),
    meta: { title: 'Safer Gambling | Daily Choice List' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About | Daily Choice List' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact | Daily Choice List' },
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
    meta: { title: 'Privacy Policy | Daily Choice List' },
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/TermsView.vue'),
    meta: { title: 'Terms of Use | Daily Choice List' },
  },
  {
    path: '/advertiser-disclosure',
    name: 'disclosure',
    component: () => import('@/views/AdvertiserDisclosureView.vue'),
    meta: { title: 'Advertiser Disclosure | Daily Choice List' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]
