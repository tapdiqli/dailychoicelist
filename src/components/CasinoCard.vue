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
      <div class="h-[90px] w-[180px] shrink-0 overflow-hidden rounded-xl border border-teal/40 shadow">
        <img :src="casino.image" :alt="`${casino.name} brand mark`" class="h-full w-full object-cover" />
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="font-display text-2xl font-extrabold">{{ casino.name }}</h3>
        <p class="mt-1 text-sm leading-relaxed text-muted">{{ casino.summary }}</p>
        <p class="mt-2 text-[11px] text-muted">18+. T&amp;Cs apply. BeGambleAware.org</p>
        <ul class="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-teal">
          <li v-for="feature in casino.features" :key="feature" class="rounded-full border border-teal/30 px-2.5 py-1">
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="flex w-40 shrink-0 flex-col items-center gap-2">
        <p class="font-display text-4xl font-extrabold text-copper-light">{{ casino.rating }}</p>
        <p class="text-center text-[11px] font-semibold text-muted">{{ casino.highlight }}</p>
        <span class="mt-1 w-full rounded-full bg-gradient-to-b from-copper-light to-copper py-2.5 text-center text-sm font-extrabold text-deep group-hover:brightness-110">
          Visit {{ casino.name }}
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-3 pt-8 md:hidden">
      <div class="flex items-center gap-3">
        <div class="h-16 w-28 overflow-hidden rounded-lg border border-teal/40">
          <img :src="casino.image" :alt="`${casino.name} brand mark`" class="h-full w-full object-cover" />
        </div>
        <div>
          <h3 class="font-display text-xl font-extrabold">{{ casino.name }}</h3>
          <p class="text-2xl font-extrabold text-copper-light">{{ casino.rating }}</p>
        </div>
      </div>
      <p class="text-sm leading-relaxed text-muted">{{ casino.summary }}</p>
      <p class="text-[11px] text-muted">18+. T&amp;Cs apply. BeGambleAware.org</p>
      <p class="text-xs font-semibold text-teal">{{ casino.highlight }}</p>
      <span class="rounded-full bg-gradient-to-b from-copper-light to-copper py-2.5 text-center text-sm font-extrabold text-deep">
        Visit {{ casino.name }}
      </span>
    </div>
  </a>
  <p class="sr-only">
    Outbound link to a licensed operator. 18+ only.
    {{ LINKS.begambleaware }}
  </p>
</template>
