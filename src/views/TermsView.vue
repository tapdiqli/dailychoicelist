<script setup lang="ts">
import { SITE } from '@/data/site'
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-10 text-sm leading-relaxed text-muted">
    <h1 class="font-display text-4xl font-extrabold text-ink">Terms of use</h1>
    <p class="mt-2 text-xs uppercase tracking-wider">Effective: September 2026</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">1. Agreement</h2>
    <p class="mt-3">By using {{ SITE.domain }} you accept these terms and the privacy policy. If you do not, close the site.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">2. Age and territory</h2>
    <p class="mt-3">The pages are for people aged 18 or over who live in Great Britain or Northern Ireland. Under-18 gambling is an offence in the UK.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">3. Offers can change</h2>
    <p class="mt-3">We check operator wording, but brands can alter promotions without telling us. Always read the operator’s own terms before you deposit. Nothing on this site is an invitation to gamble beyond your means.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">4. Intellectual property</h2>
    <p class="mt-3">Copy, layout, original graphics and compiled rankings on {{ SITE.domain }} are protected. Do not reproduce them without written permission. Operator names remain their owners’ marks; our brand tiles are original editorial artwork, not official logos.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">5. Liability</h2>
    <p class="mt-3">{{ SITE.name }} is a comparison publisher, not a gambling operator. We are not responsible for losses on third-party sites you visit from these pages.</p>
  </div>
</template>
