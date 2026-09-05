<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
import { useSiteState } from '@/composables/useSiteState'

const { showCookies, setCookies } = useSiteState()
</script>

<template>
  <Dialog :open="showCookies" @close="() => setCookies('essential')" class="relative z-[80]">
    <div class="fixed inset-0 bg-deep/50" aria-hidden="true" />
    <div class="fixed inset-x-0 bottom-0 p-4 sm:inset-0 sm:grid sm:place-items-center">
      <DialogPanel class="w-full max-w-lg rounded-2xl border border-line bg-panel p-5 shadow-xl">
        <div class="mb-3 flex items-start justify-between gap-3">
          <DialogTitle class="font-display text-lg font-bold">Cookie choices</DialogTitle>
          <button type="button" class="text-muted hover:text-ink" aria-label="Dismiss and use essential cookies only" @click="setCookies('essential')">
            ×
          </button>
        </div>
        <p class="text-sm leading-relaxed text-muted">
          We store a few cookies and similar tags so the site remembers your age check. Optional tags help us understand traffic and measure ads. Pick “Essential only” if you prefer analytics and advertising measurement to stay off.
          <RouterLink to="/privacy-policy" class="text-copper-light underline">Privacy & cookie policy</RouterLink>
        </p>
        <div class="mt-4 flex flex-col gap-2 sm:flex-row">
          <button type="button" class="flex-1 rounded-full bg-copper px-4 py-2.5 text-sm font-bold text-deep" @click="setCookies('all')">
            Accept all
          </button>
          <button type="button" class="flex-1 rounded-full border border-line px-4 py-2.5 text-sm font-semibold" @click="setCookies('essential')">
            Essential only
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
