<script setup lang="ts">
import { computed, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
import { FAQ_FILTERS, FAQS, type FaqCategory } from '@/data/faqs'

const query = ref('')
const filter = ref<FaqCategory>('all')

const visible = computed(() => {
  const q = query.value.trim().toLowerCase()
  return FAQS.filter((item) => {
    const inFilter = filter.value === 'all' || item.category === filter.value
    if (!inFilter) return false
    if (!q) return true
    return `${item.question} ${item.answer.join(' ')}`.toLowerCase().includes(q)
  })
})
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-10">
    <div class="rounded-3xl border border-line bg-mesh bg-panel p-6 md:p-8">
      <p class="inline-flex rounded-full border border-teal/40 bg-deep px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal">
        UK player FAQ 2026
      </p>
      <h1 class="mt-4 font-display text-4xl font-extrabold">Questions players actually ask</h1>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        Straight answers on UKGC licences, wagering maths, payout rails, RTP, and the safer-play tools every licensed room must provide.
      </p>
      <label class="mt-6 block">
        <span class="sr-only">Search questions</span>
        <input
          v-model="query"
          type="search"
          placeholder="Search questions (licence, wagering, payouts, tax)…"
          class="w-full rounded-full border border-line bg-deep px-5 py-3 text-sm outline-none ring-copper-light/40 placeholder:text-muted focus:ring-2"
        />
      </label>
    </div>

    <div class="mt-6 flex flex-wrap gap-2">
      <button
        v-for="item in FAQ_FILTERS"
        :key="item.id"
        type="button"
        class="rounded-full px-3 py-1.5 text-xs font-semibold"
        :class="filter === item.id ? 'bg-teal text-deep' : 'border border-line bg-panel text-ink'"
        @click="filter = item.id"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="mt-6 space-y-3">
      <Disclosure v-for="item in visible" :key="item.id" v-slot="{ open }" :default-open="item.id === 'licensed'">
        <div class="overflow-hidden rounded-2xl border border-line bg-panel">
          <DisclosureButton class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
            <span class="text-sm font-semibold">
              <span class="text-teal">Q.</span>
              {{ item.question }}
            </span>
            <span class="text-muted">{{ open ? '−' : '+' }}</span>
          </DisclosureButton>
          <DisclosurePanel class="border-t border-line bg-card px-5 py-4 text-sm leading-relaxed text-muted">
            <p v-for="(para, idx) in item.answer" :key="idx" :class="idx ? 'mt-3' : ''">{{ para }}</p>
          </DisclosurePanel>
        </div>
      </Disclosure>
      <p v-if="!visible.length" class="rounded-2xl border border-line bg-panel px-5 py-8 text-center text-sm text-muted">
        No matches. Try another keyword or reset the filters.
      </p>
    </div>

    <div class="mt-10 grid gap-4 md:grid-cols-2">
      <article class="rounded-2xl border border-line bg-panel p-5">
        <h2 class="font-display text-lg font-bold">Still stuck?</h2>
        <p class="mt-2 text-sm text-muted">The editorial desk can unpack terms, offer wording, or an identity-check delay.</p>
        <RouterLink to="/contact" class="mt-3 inline-flex text-sm font-semibold text-copper-light">Contact editorial desk</RouterLink>
      </article>
      <article class="rounded-2xl border border-line bg-panel p-5">
        <h2 class="font-display text-lg font-bold">Safer gambling support</h2>
        <p class="mt-2 text-sm text-muted">Deposit caps, time-outs, GAMSTOP, and free confidential help.</p>
        <RouterLink to="/responsible-gambling" class="mt-3 inline-flex text-sm font-semibold text-teal">Responsible gambling guide</RouterLink>
      </article>
    </div>
  </div>
</template>
