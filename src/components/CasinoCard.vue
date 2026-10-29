<script setup lang="ts">
import type { Casino } from '@/data/casinos'
import { LINKS } from '@/data/site'

defineProps<{ casino: Casino }>()
</script>

<template>
  <a
    :href="casino.href"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block overflow-hidden rounded-xl p-4 sm:p-5"
    :class="
      casino.featured
        ? 'border-2 border-copper-light bg-gradient-to-r from-panel via-card to-panel shadow-copper'
        : 'border border-teal/30 bg-panel/90 shadow-lg hover:border-teal'
    "
  >
    <span
      class="absolute left-0 top-0 z-10 flex items-center gap-1 rounded-br-lg px-3 py-1 text-xs font-black uppercase tracking-wider"
      :class="casino.featured ? 'bg-gradient-to-r from-copper-light to-copper text-deep' : 'border-b border-r border-teal/30 bg-deep text-copper-light'"
    >
      <span>#{{ casino.rank }}</span>
      <span>• {{ casino.badge }}</span>
    </span>

    <div class="hidden items-center gap-5 pt-3 md:flex">
      <div class="h-[90px] w-[180px] shrink-0">
        <img :src="casino.image" :alt="`${casino.name} brand mark`" class="h-full w-full object-contain" />
      </div>

      <div class="min-w-0 flex-1 flex flex-col justify-center items-center">
        <div
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-copper-light/25 via-copper/15 to-copper-light/10 px-4 py-2.5 ring-1 ring-copper-light/50"
        >
          <span class="text-xl">🎁</span>
          <span class="font-display text-base font-extrabold leading-tight text-copper-light md:text-lg">{{ casino.highlight }}</span>
        </div>
        <p class="mt-2 text-[11px] text-muted">18+. T&amp;Cs apply. BeGambleAware.org</p>
      </div>

      <ul class="flex w-48 shrink-0 flex-col gap-2 text-sm font-bold text-teal">
        <li v-for="feature in casino.features" :key="feature" class="flex items-center gap-2">
          <span class="text-copper-light">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <div class="flex w-40 shrink-0 flex-col items-center gap-2">
        <p class="font-display text-4xl font-extrabold text-copper-light">{{ casino.rating }}</p>
        <span class="mt-1 w-full rounded-full bg-gradient-to-b from-copper-light to-copper py-2.5 text-center text-sm font-extrabold text-deep group-hover:brightness-110">
          Visit {{ casino.name }}
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-4 pt-8 md:hidden">
      <div class="flex items-center justify-between gap-3">
        <div class="h-24 w-44 shrink-0">
          <img :src="casino.image" :alt="`${casino.name} brand mark`" class="h-full w-full object-contain" />
        </div>
        <div class="flex shrink-0 flex-col items-center rounded-xl bg-deep/60 px-3.5 py-1.5 ring-1 ring-copper-light/30">
          <span class="font-display text-2xl font-extrabold leading-none text-copper-light">{{ casino.rating }}</span>
          <span class="text-[10px] font-semibold uppercase tracking-wider text-muted">Rating</span>
        </div>
      </div>

      <div
        class="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-copper-light/25 via-copper/15 to-copper-light/10 px-4 py-3 ring-1 ring-copper-light/50"
      >
        <span class="text-2xl">🎁</span>
        <span class="font-display text-base font-extrabold leading-snug text-copper-light">{{ casino.highlight }}</span>
      </div>

      <ul class="grid grid-cols-2 gap-2 text-xs font-bold text-teal">
        <li
          v-for="feature in casino.features"
          :key="feature"
          class="flex items-center gap-1.5 rounded-lg border border-teal/25 bg-deep/40 px-2.5 py-2"
        >
          <span class="shrink-0 text-copper-light">✓</span>
          <span class="truncate">{{ feature }}</span>
        </li>
      </ul>

      <span
        class="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-copper-light to-copper py-3 text-center text-sm font-extrabold text-deep"
      >
        Visit {{ casino.name }}
        <span aria-hidden="true">→</span>
      </span>
    </div>
  </a>
  <p class="sr-only">
    Outbound link to a licensed operator. 18+ only.
    {{ LINKS.begambleaware }}
  </p>
</template>
