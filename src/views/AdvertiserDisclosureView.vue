<script setup lang="ts">
import { SITE } from '@/data/site'
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <p class="text-xs font-bold uppercase tracking-wider text-teal">Transparency</p>
    <h1 class="mt-2 font-display text-4xl font-extrabold">Advertiser disclosure & method</h1>
    <p class="mt-4 text-sm leading-relaxed text-muted">
      In line with ASA guidance and the advertising-platform rules we work under, {{ SITE.domain }} explains how rankings are paid for and how they are built.
    </p>

    <h2 class="mt-8 font-display text-2xl font-bold">1. Affiliate commissions</h2>
    <p class="mt-3 text-sm leading-relaxed text-muted">
      This is an independent referral site. When a reader uses an outbound link and later registers or deposits, we may earn a commission. That is the commercial basis of the free comparison.
    </p>

    <h2 class="mt-8 font-display text-2xl font-bold">2. What money cannot buy</h2>
    <p class="mt-3 text-sm leading-relaxed text-muted">A fee does not waive the safety bar. Every listed brand still has to show:</p>
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
      <li>An active UK Gambling Commission licence.</li>
      <li>Segregated UK player-fund protection.</li>
      <li>Independent testing of game RTP.</li>
      <li>A live connection to GAMSTOP.</li>
    </ul>

    <h2 class="mt-8 font-display text-2xl font-bold">3. How position is decided</h2>
    <p class="mt-3 text-sm leading-relaxed text-muted">
      Order reflects a mix of product quality, cashout speed, mobile experience and the terms we can stand behind in writing. Commercial terms can influence whether a brand is on the page at all; they do not let an unlicensed or unsafe operator skip the checks above.
    </p>
  </div>
</template>
