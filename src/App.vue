<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { watch } from 'vue'
import AgeGate from '@/components/AgeGate.vue'
import CookieBanner from '@/components/CookieBanner.vue'
import ComplianceBar from '@/components/ComplianceBar.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import DisclosureModal from '@/components/DisclosureModal.vue'
import { SITE } from '@/data/site'

const route = useRoute()

watch(
  () => route.meta.title,
  (title) => {
    document.title = (title as string | undefined) ?? `${SITE.name} | UK casino comparison`
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen bg-deep text-ink">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-copper focus:px-3 focus:py-2 focus:text-deep"
    >
      Skip to content
    </a>
    <AgeGate />
    <div class="sticky top-0 z-40 bg-deep">
      <ComplianceBar />
      <SiteHeader />
    </div>
    <main id="main">
      <RouterView />
    </main>
    <SiteFooter />
    <DisclosureModal />
  </div>
</template>
