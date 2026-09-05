<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { LINKS } from '@/data/site'
import { useSiteState } from '@/composables/useSiteState'

const { showAgeGate, confirmAge } = useSiteState()

function leave() {
  window.location.href = LINKS.begambleaware
}
</script>

<template>
  <Dialog :open="showAgeGate" @close="() => undefined" class="relative z-[90]">
    <div class="fixed inset-0 bg-deep/80 backdrop-blur-md" aria-hidden="true" />
    <div class="fixed inset-0 grid place-items-center p-4">
      <DialogPanel
        class="w-full max-w-md rounded-3xl border border-copper-light/70 bg-panel px-6 py-8 text-center shadow-copper"
      >
        <div
          class="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-ink [box-shadow:inset_0_0_0_4px_transparent,inset_0_0_0_6px_rgba(243,246,251,0.4)]"
        >
          <span class="font-display text-xl font-extrabold tracking-tight">18+</span>
        </div>
        <DialogTitle class="font-display text-2xl font-extrabold text-copper-light">
          Confirm you are an adult
        </DialogTitle>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          Daily Choice List is for people aged 18 and over who live in Great Britain or Northern Ireland. Licensed casino listings sit behind this check.
        </p>
        <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            class="rounded-full bg-gradient-to-b from-teal to-[#2a8f9a] px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-deep shadow-[0_0_24px_rgb(61_184_197_/_0.35)]"
            @click="confirmAge"
          >
            I am 18 or over
          </button>
          <button
            type="button"
            class="rounded-full border border-line bg-deep px-4 py-3 text-sm font-semibold text-ink"
            @click="leave"
          >
            Leave this site
          </button>
        </div>
        <p class="mt-5 text-xs text-muted">UK Gambling Commission rules apply</p>
      </DialogPanel>
    </div>
  </Dialog>
</template>
