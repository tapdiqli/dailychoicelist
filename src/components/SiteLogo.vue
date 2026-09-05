<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { SITE } from '@/data/site'
</script>

<template>
  <RouterLink to="/" class="group inline-flex items-center" :aria-label="SITE.name">
    <img
      src="/logo.png"
      :alt="SITE.name"
      class="h-10 w-auto max-w-[220px] object-contain object-left md:h-12 md:max-w-[260px]"
    />
  </RouterLink>
</template>
