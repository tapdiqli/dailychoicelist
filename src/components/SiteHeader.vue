<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
import SiteLogo from '@/components/SiteLogo.vue'
import { LEGAL_NAV, NAV } from '@/data/site'

const open = ref(false)
</script>

<template>
  <header class="border-b border-line/70 bg-mid/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <SiteLogo />
      <nav class="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
        <RouterLink v-for="item in NAV" :key="item.to" :to="item.to" class="hover:text-copper-light" active-class="text-copper-light">
          {{ item.label }}
        </RouterLink>
      </nav>
      <button type="button" class="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden" aria-label="Toggle navigation" @click="open = true">
        <span class="flex w-5 flex-col gap-1.5">
          <span class="block h-0.5 w-full bg-ink" />
          <span class="block h-0.5 w-full bg-ink" />
          <span class="block h-0.5 w-full bg-ink" />
        </span>
      </button>
    </div>
  </header>

  <Dialog :open="open" @close="open = false" class="relative z-50 md:hidden">
    <div class="fixed inset-0 bg-deep/70" aria-hidden="true" />
    <div class="fixed inset-y-0 right-0 flex max-w-xs">
      <DialogPanel class="w-80 border-l border-line bg-panel p-6">
        <div class="mb-6 flex items-center justify-between">
          <p class="font-display text-lg font-bold">Menu</p>
          <button type="button" class="text-2xl text-muted" aria-label="Close menu" @click="open = false">×</button>
        </div>
        <nav class="flex flex-col gap-3 text-base font-semibold">
          <RouterLink v-for="item in NAV" :key="item.to" :to="item.to" class="rounded-lg px-3 py-2 hover:bg-card" @click="open = false">
            {{ item.label }}
          </RouterLink>
          <hr class="border-line" />
          <RouterLink v-for="item in LEGAL_NAV" :key="item.to" :to="item.to" class="rounded-lg px-3 py-2 text-sm text-muted hover:bg-card" @click="open = false">
            {{ item.label }}
          </RouterLink>
        </nav>
      </DialogPanel>
    </div>
  </Dialog>
</template>
