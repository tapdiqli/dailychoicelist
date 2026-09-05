<script setup lang="ts">
import { SITE } from '@/data/site'

const steps = [
  { title: 'Licence check', body: 'We confirm the operator sits on the live UKGC register and that the account is in good standing.' },
  { title: 'Real cashouts', body: 'Withdrawals are timed on Trustly, Visa Direct and PayPal so the published speed is not just a slogan.' },
  { title: 'Terms, line by line', body: 'Wagering multipliers, game weighting and expiry windows are read before a brand is scored.' },
  { title: 'Phones and support', body: 'iOS and Android layouts are checked, along with whether UK live chat is actually staffed.' },
]
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <h1 class="font-display text-4xl font-extrabold">About Daily Choice List</h1>
    <p class="mt-4 text-base leading-relaxed text-muted">
      {{ SITE.domain }} is an independent UK comparison desk run by people who have spent years around iGaming product, payments and compliance. We publish a short list, not a catalogue of every domain that will pay for a banner.
    </p>

    <h2 class="mt-10 font-display text-2xl font-bold">What we are for</h2>
    <p class="mt-3 text-sm leading-relaxed text-muted">
      The job is to give adult players in Great Britain and Northern Ireland a clear, UKGC-only comparison. Offshore and unlicensed rooms are out. Every partner has to meet UK player-protection law, including segregated funds.
    </p>

    <h2 class="mt-10 font-display text-2xl font-bold">How a brand gets onto the list</h2>
    <ol class="mt-5 space-y-4">
      <li v-for="(step, i) in steps" :key="step.title" class="rounded-2xl border border-line bg-panel p-5">
        <p class="text-xs font-bold text-teal">{{ i + 1 }}</p>
        <h3 class="mt-1 font-display text-lg font-bold">{{ step.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ step.body }}</p>
      </li>
    </ol>

    <h2 class="mt-10 font-display text-2xl font-bold">Money and independence</h2>
    <p class="mt-3 text-sm leading-relaxed text-muted">
      This site is funded by affiliate commissions. If you register or deposit after using a link here, we may be paid. That is how the pages stay free to read. It is not a licence to list unsafe operators, and it is not a reason to hide terms. Ranking still starts with the licence, the cashout test, and the small print.
    </p>
  </div>
</template>
