<script setup lang="ts">
import { LINKS, SITE } from '@/data/site'
import { useSiteState } from '@/composables/useSiteState'

const { disclosureOpen } = useSiteState()
</script>

<template>
  <div class="border-b border-line/80 bg-[#05080f] text-[11px] text-muted">
    <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 md:flex-row md:items-center md:justify-between">
      <p class="flex items-start gap-2 leading-snug md:items-center">
        <span class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-danger text-[9px] font-black text-white">18+</span>
        Adults only — this guide is written for grown-ups. Read the notes, take your time, and keep a healthy gap from the game.
      </p>
      <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
        <a :href="LINKS.begambleaware" target="_blank" rel="noopener noreferrer" class="font-semibold text-copper-light hover:text-ink">BeGambleAware.org</a>
        <span class="text-line">|</span>
        <a :href="LINKS.gamstop" target="_blank" rel="noopener noreferrer" class="font-semibold hover:text-ink">GamStop registered</a>
      </div>
    </div>
    <div class="border-t border-line/50">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
        <button type="button" class="inline-flex items-center gap-1 font-semibold text-teal hover:text-ink" @click="disclosureOpen = true">
          <span class="grid h-3.5 w-3.5 place-items-center rounded-full border border-teal text-[9px]">i</span>
          Advertiser disclosure
        </button>
        <p class="uppercase tracking-[0.18em] text-[10px] text-muted">Last audited: {{ SITE.lastAudited }}</p>
      </div>
    </div>
  </div>
</template>
