<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SiteLogo from '@/components/SiteLogo.vue'
import { LEGAL_NAV, LINKS, NAV, SITE } from '@/data/site'
</script>

<template>
  <footer class="mt-16 border-t border-line bg-mid">
    <div class="border-b border-line bg-panel px-4 py-4">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper-light/70 bg-copper/20 text-xs font-extrabold text-copper-light">
            18+
          </div>
          <p class="max-w-2xl text-[11px] leading-snug text-muted">
            Gambling can be addictive. Please play responsibly. Only stake what you can afford to lose. For confidential help, call the National Gambling Helpline on
            <strong class="text-ink">{{ SITE.helpline }}</strong>
            or visit
            <a :href="LINKS.begambleaware" target="_blank" rel="noopener noreferrer" class="text-copper-light underline hover:text-ink">BeGambleAware.org</a>.
          </p>
        </div>
        <div class="flex shrink-0 items-center gap-2">
          <a :href="LINKS.gamstop" target="_blank" rel="noopener noreferrer" class="rounded border border-line bg-deep px-3 py-1.5 text-[11px] font-bold text-copper-light hover:border-teal">
            GAMSTOP Registered
          </a>
          <a :href="LINKS.gamcare" target="_blank" rel="noopener noreferrer" class="rounded border border-line bg-deep px-3 py-1.5 text-[11px] font-bold hover:border-teal">
            GamCare Certified
          </a>
        </div>
      </div>
    </div>

    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-4">
      <div class="space-y-3">
        <SiteLogo />
        <p class="text-[11px] leading-relaxed text-muted">
          A UK comparison desk for licensed online casinos, checked operator performance, and straight editorial notes — written for adult players in Great Britain and Northern Ireland.
        </p>
      </div>
      <div>
        <h4 class="mb-2 text-xs font-bold uppercase tracking-wider text-copper-light">Main pages</h4>
        <ul class="space-y-1.5 text-[11px] text-muted">
          <li v-for="item in NAV" :key="item.to">
            <RouterLink :to="item.to" class="hover:text-teal">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="mb-2 text-xs font-bold uppercase tracking-wider text-copper-light">Legal & compliance</h4>
        <ul class="space-y-1.5 text-[11px] text-muted">
          <li v-for="item in LEGAL_NAV" :key="item.to">
            <RouterLink :to="item.to" class="hover:text-teal">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="mb-2 text-xs font-bold uppercase tracking-wider text-copper-light">UKGC licensing notice</h4>
        <p class="text-[11px] leading-relaxed text-muted">
          Every brand partner on {{ SITE.domain }} holds an active licence issued by the UK Gambling Commission. Gambling under 18 is an offence under UK law.
        </p>
      </div>
    </div>

    <div class="border-t border-line bg-[#05080f] px-4 py-6">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 sm:gap-10">
        <a :href="LINKS.begambleaware" target="_blank" rel="noopener noreferrer" aria-label="BeGambleAware" class="opacity-90 hover:opacity-100">
          <span class="text-base font-extrabold tracking-tight text-white">Gamble<span class="text-[#EF681C]">Aware</span></span>
        </a>
        <a :href="LINKS.gamcare" target="_blank" rel="noopener noreferrer" aria-label="GamCare" class="text-base font-extrabold tracking-wider text-white opacity-90 hover:opacity-100">
          GamCare
        </a>
        <a :href="LINKS.gamstop" target="_blank" rel="noopener noreferrer" aria-label="GAMSTOP" class="inline-flex opacity-90 hover:opacity-100">
          <span class="rounded-l bg-[#35A8E0] px-2 py-0.5 text-xs font-black text-white">GAM</span>
          <span class="rounded-r bg-[#1D1D1B] px-2 py-0.5 text-xs font-black text-white">STOP</span>
        </a>
        <a :href="LINKS.begambleaware" target="_blank" rel="noopener noreferrer" aria-label="18+ Play Responsibly">
          <img src="/reg/18-play-responsibly.png" alt="18+ Play Responsibly" class="h-8 w-auto object-contain" />
        </a>
        <a :href="LINKS.takeTimeToThink" target="_blank" rel="noopener noreferrer" aria-label="Take Time to Think">
          <img src="/reg/take-time-to-think.png" alt="Take Time to Think" class="h-8 w-auto object-contain" />
        </a>
        <a :href="LINKS.saferGamblingWeek" target="_blank" rel="noopener noreferrer" aria-label="Safer Gambling Week">
          <img src="/reg/safergamblingweek.png" alt="Safer Gambling Week" class="h-8 w-auto object-contain" />
        </a>
      </div>
      <p class="mt-5 text-center text-[11px] text-muted">
        © {{ new Date().getFullYear() }} {{ SITE.domain }}. All rights reserved. Built for Great Britain & Northern Ireland residents.
      </p>
    </div>
  </footer>
</template>
