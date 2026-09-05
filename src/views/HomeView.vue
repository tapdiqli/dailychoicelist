<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import CasinoCard from '@/components/CasinoCard.vue'
import { CASINOS } from '@/data/casinos'
import { FAQS } from '@/data/faqs'
import { LINKS } from '@/data/site'

const homeFaqIds = ['licensed', 'kyc', 'wagering', 'ranking', 'tools'] as const
const homeFaqs = homeFaqIds
  .map((id) => FAQS.find((item) => item.id === id))
  .filter((item): item is (typeof FAQS)[number] => Boolean(item))

const pillars = [
  { title: 'Ring-fenced balances', body: 'UK rules require licensed rooms to keep player funds in accounts that sit apart from day-to-day operating cash, so a deposit is not mixed with company spending.' },
  { title: 'Digital ID that actually moves', body: 'Open Banking, Visa Fast Funds and PayPal are now standard. Most UK residents can clear checks in minutes rather than posting paperwork.' },
  { title: 'GAMSTOP on every listing', body: 'A UKGC licence means a live hook-up to the national self-exclusion service. One enrolment covers the licensed market, not a single brand.' },
]

const reasons = [
  { title: 'UKGC licence or no listing', body: 'If a brand is missing from the Commission register, it does not appear here. Player-protection audits are a gate, not a footnote.' },
  { title: 'Accounts we actually open', body: 'Reviewers create real profiles, time identity checks, and watch live tables before a site is added to the ranking.' },
  { title: 'Small print, written in English', body: 'We read wagering clauses, game-weighting notes and expiry windows, then flag anything a new player should know first.' },
  { title: 'Checked on a weekly loop', body: 'Ratings, payout rails and review notes are re-opened each week. If a standard slips, the position slips with it.' },
]
</script>

<template>
  <div>
    <section class="bg-mesh border-b border-line">
      <div class="mx-auto max-w-7xl px-4 py-7 md:py-9">
        <h1 class="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          A measured UK casino shortlist for 2026
        </h1>
        <p class="mt-3 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          Daily Choice List lines up UKGC-licensed rooms — currently MrQ and Lottomart — so you can compare protected accounts, audited slots, and how each brand actually runs, without wading through an endless directory.
        </p>
        <ul
          class="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] snap-x snap-mandatory md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:snap-none [&::-webkit-scrollbar]:hidden"
          aria-label="Site highlights"
        >
          <li class="snap-start shrink-0 rounded-full border border-line bg-panel px-3 py-2 text-xs font-semibold whitespace-nowrap">UKGC licensed sites only</li>
          <li class="snap-start shrink-0 rounded-full border border-line bg-panel px-3 py-2 text-xs font-semibold whitespace-nowrap">Independent desk reviews</li>
          <li class="snap-start shrink-0 rounded-full border border-line bg-panel px-3 py-2 text-xs font-semibold whitespace-nowrap">Re-checked weekly</li>
          <li class="snap-start shrink-0 rounded-full border border-line bg-panel px-3 py-2 text-xs font-semibold whitespace-nowrap">Written for UK players</li>
          <li class="snap-start shrink-0 rounded-full border border-danger/40 bg-panel px-3 py-2 text-xs font-semibold whitespace-nowrap">18+ BeGambleAware</li>
        </ul>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-12">
      <div class="hidden md:block">
        <h2 class="font-display text-2xl font-extrabold md:text-3xl">Compare UKGC-licensed brands: MrQ and Lottomart</h2>
        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Two operators currently sit on our recommended list. Names, scores and the notes that matter are written in full so you can weigh MrQ against Lottomart before you leave this page.
        </p>
      </div>
      <div class="space-y-4 md:mt-8">
        <CasinoCard v-for="casino in CASINOS" :key="casino.id" :casino="casino" />
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6">
      <h2 class="font-display text-2xl font-extrabold md:text-3xl">Finding your way around the UK remote casino market</h2>
      <p class="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
        Britain runs one of the tightest remote-gambling regimes in the world. The UK Gambling Commission sets the bar on how player money is held, how games are tested, and which safer-play tools must be on the account screen.
      </p>
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <article v-for="item in pillars" :key="item.title" class="rounded-2xl border border-line bg-panel p-5">
          <h3 class="font-display text-lg font-bold text-copper-light">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-10">
      <h2 class="font-display text-2xl font-extrabold md:text-3xl">Why this ranking exists</h2>
      <p class="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
        We do the licence checks, cashout timings and terms reading so you can start from a short, current list rather than a marketing wall.
      </p>
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <article v-for="item in reasons" :key="item.title" class="rounded-2xl border border-line bg-card p-5">
          <h3 class="font-display text-lg font-bold">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.body }}</p>
        </article>
      </div>
      <RouterLink to="/about" class="mt-6 inline-flex text-sm font-semibold text-teal hover:text-copper-light">
        Read how the desk tests each brand →
      </RouterLink>
    </section>

    <section class="mx-auto grid max-w-7xl gap-4 px-4 pb-8 md:grid-cols-2">
      <article class="rounded-2xl border border-line bg-panel p-6">
        <h2 class="font-display text-xl font-bold">Questions about UK casinos?</h2>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          Licensing, identity checks, wagering maths and how we score each room are covered in the FAQ.
        </p>
        <RouterLink to="/faq" class="mt-4 inline-flex text-sm font-semibold text-copper-light hover:text-ink">Open the FAQ page</RouterLink>
      </article>
      <article class="rounded-2xl border border-teal/40 bg-card p-6">
        <p class="text-xs font-bold uppercase tracking-wider text-teal">18+</p>
        <h3 class="mt-2 font-display text-xl font-bold">Keep it as entertainment</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          Set deposit caps, take pauses, and never chase a loss with money you need elsewhere. Confidential help is free, around the clock.
        </p>
        <RouterLink to="/responsible-gambling" class="mt-4 inline-flex text-sm font-semibold text-teal hover:text-copper-light">
          Safer gambling tools →
        </RouterLink>
      </article>
    </section>

    <section class="mx-auto max-w-7xl px-4 pb-12">
      <div class="flex items-end justify-between gap-4">
        <h2 class="font-display text-2xl font-extrabold">Quick answers</h2>
        <RouterLink to="/faq" class="text-sm font-semibold text-muted hover:text-copper-light">See every FAQ</RouterLink>
      </div>
      <div class="mt-6 space-y-3">
        <Disclosure v-for="item in homeFaqs" :key="item.id" v-slot="{ open }" :default-open="item.id === 'licensed'">
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
      </div>
      <p class="mt-6 text-xs leading-relaxed text-muted">
        Gambling can be addictive. Please play responsibly. Only bet what you can afford to lose. For confidential help, contact the National Gambling Helpline on
        <strong>0808 8020 133</strong>
        or visit
        <a :href="LINKS.begambleaware" class="text-copper-light underline" target="_blank" rel="noopener noreferrer">BeGambleAware.org</a>.
      </p>
    </section>
  </div>
</template>
