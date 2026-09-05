<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
import { useSiteState } from '@/composables/useSiteState'
import { SITE } from '@/data/site'

const { disclosureOpen } = useSiteState()
</script>

<template>
  <Dialog :open="disclosureOpen" @close="disclosureOpen = false" class="relative z-[85]">
    <div class="fixed inset-0 bg-deep/70" aria-hidden="true" />
    <div class="fixed inset-0 grid place-items-center p-4">
      <DialogPanel class="w-full max-w-lg rounded-2xl border border-line bg-panel p-6">
        <DialogTitle class="font-display text-xl font-bold">How this site is funded</DialogTitle>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          {{ SITE.name }} is an independent comparison publisher. Some outbound casino links are affiliate referrals. If you open an account after using one of those links, we may be paid a commission. That commercial arrangement does not change our UKGC-only rule, and it does not replace the terms on the operator’s own site.
        </p>
        <div class="mt-5 flex justify-end gap-3">
          <RouterLink to="/advertiser-disclosure" class="text-sm font-semibold text-copper-light underline" @click="disclosureOpen = false">
            Full disclosure
          </RouterLink>
          <button type="button" class="rounded-full bg-copper px-4 py-2 text-sm font-bold text-deep" @click="disclosureOpen = false">
            Close
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
