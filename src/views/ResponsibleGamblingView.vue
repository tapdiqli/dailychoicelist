<script setup lang="ts">
import { LINKS, SITE } from '@/data/site'

const controls = [
  { title: 'Deposit and loss caps', body: 'Put a daily, weekly or monthly ceiling on what you can add or lose before a session starts.' },
  { title: 'Reality checks', body: 'On-screen reminders show elapsed time and a running win/loss figure so a session does not disappear into the evening.' },
  { title: 'Time-outs', body: 'Pause the account for 24 hours up to six weeks if you want a short break without a full self-exclusion.' },
  { title: 'GAMSTOP', body: 'One enrolment blocks GB-licensed websites and apps for six months, a year, or five years.' },
]

const signs = [
  'Spending more time or money than you meant to when you logged in.',
  'Chasing a previous loss instead of walking away.',
  'Using money that was meant for rent, bills or everyday living costs.',
  'Feeling tense, guilty or irritable when you think about play.',
  'Hiding activity from people who share your household or finances.',
]
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-10">
    <p class="text-xs font-bold uppercase tracking-wider text-teal">18+ UK player safety first</p>
    <h1 class="mt-3 font-display text-4xl font-extrabold">Safer gambling, in plain English</h1>
    <p class="mt-4 text-base leading-relaxed text-muted">
      On {{ SITE.domain }}, player welfare sits above any ranking. Remote gambling is entertainment. It is not a wage, a debt plan, or a way to put things right.
    </p>

    <h2 class="mt-10 font-display text-2xl font-bold">Tools every UKGC casino must offer</h2>
    <p class="mt-3 text-sm leading-relaxed text-muted">
      Licensed operators are required to put account controls in front of you. Switch them on as soon as the profile is open — not after a heavy session.
    </p>
    <ol class="mt-6 space-y-4">
      <li v-for="(item, i) in controls" :key="item.title" class="rounded-2xl border border-line bg-panel p-5">
        <p class="text-xs font-bold text-copper-light">{{ i + 1 }}.</p>
        <h3 class="mt-1 font-display text-lg font-bold">{{ item.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.body }}</p>
      </li>
    </ol>

    <h2 class="mt-10 font-display text-2xl font-bold">Warning signs worth taking seriously</h2>
    <p class="mt-3 text-sm text-muted">If several of these sound familiar, pause and use the help links below.</p>
    <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
      <li v-for="sign in signs" :key="sign">{{ sign }}</li>
    </ul>

    <section class="mt-10 rounded-3xl border border-teal/40 bg-panel p-6">
      <h2 class="font-display text-2xl font-bold">Free, confidential help — 24/7</h2>
      <p class="mt-2 text-sm text-muted">Support across Great Britain does not require a referral and does not appear on a credit file.</p>
      <div class="mt-5 grid gap-3 sm:grid-cols-2">
        <a :href="LINKS.begambleaware" target="_blank" rel="noopener noreferrer" class="rounded-xl border border-line bg-deep p-4 hover:border-copper">
          <p class="font-bold">BeGambleAware.org</p>
          <p class="mt-1 text-sm text-muted">Advice, live chat, and practical resources.</p>
        </a>
        <a :href="LINKS.gamstop" target="_blank" rel="noopener noreferrer" class="rounded-xl border border-line bg-deep p-4 hover:border-copper">
          <p class="font-bold">GAMSTOP self-exclusion</p>
          <p class="mt-1 text-sm text-muted">National block across GB-licensed sites and apps.</p>
        </a>
      </div>
      <ul class="mt-5 space-y-1 text-sm text-muted">
        <li>National Gambling Helpline: <strong class="text-ink">{{ SITE.helpline }}</strong> (24 hours, every day)</li>
        <li>GamCare live chat: <a :href="LINKS.gamcare" class="text-copper-light underline" target="_blank" rel="noopener noreferrer">gamcare.org.uk</a></li>
        <li>Gordon Moody: <a :href="LINKS.gordonMoody" class="text-copper-light underline" target="_blank" rel="noopener noreferrer">gordonmoody.org.uk</a> (residential programmes)</li>
      </ul>
    </section>
  </div>
</template>
