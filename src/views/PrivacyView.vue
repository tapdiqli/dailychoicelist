<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { LINKS, SITE } from '@/data/site'
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-10 text-sm leading-relaxed text-muted">
    <h1 class="font-display text-4xl font-extrabold text-ink">Privacy policy (UK GDPR)</h1>
    <p class="mt-2 text-xs uppercase tracking-wider">Last updated: September 2026</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">1. Who we are</h2>
    <p class="mt-3">
      This website is published by {{ SITE.domain }} (“we”, “us”, “our”). We are the controller for the personal data described here. We compare licensed casinos; we do not take deposits or run games. Questions and rights requests go to
      <a :href="`mailto:${SITE.emails.compliance}`" class="text-copper-light underline">{{ SITE.emails.compliance }}</a>.
    </p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">2. What we collect</h2>
    <ul class="mt-3 list-disc space-y-2 pl-5">
      <li>Technical data such as a truncated IP address, browser string, device type, operating system, screen size, and a rough region from the IP.</li>
      <li>Usage data: pages opened, time on page, referrer, search terms that led here, and which outbound casino links are clicked.</li>
      <li>Advertising click identifiers (for example msclkid, gclid, wbraid, gbraid, or a generic click_id) stored locally so a later referral can be matched to a campaign.</li>
      <li>Consent and age-confirmation flags kept in your browser.</li>
      <li>Correspondence if you email us.</li>
    </ul>
    <p class="mt-3">We do not knowingly collect data from anyone under 18, and we do not take payment cards or gambling-account details. Once you click through to an operator, their policy applies.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">3. Why we collect it</h2>
    <ul class="mt-3 list-disc space-y-2 pl-5">
      <li>Analytics — to see which comparisons help visitors. Lawful basis: consent.</li>
      <li>Advertising measurement — to understand which campaigns led here. Lawful basis: consent.</li>
      <li>Site improvement — to fix layout issues and keep rankings current. Lawful basis: legitimate interests.</li>
      <li>Support — to answer messages you send. Lawful basis: legitimate interests.</li>
      <li>Security — to spot abusive traffic. Lawful basis: legitimate interests.</li>
    </ul>
    <p class="mt-3">We do not sell personal data and we do not build our own advertising profiles of individuals.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">4. Who we share it with</h2>
    <p class="mt-3">Depending on your cookie choice, data may be processed by advertising and analytics providers (including Microsoft Advertising and Google), by the licensed operators we list (MrQ, Lottomart) and their affiliate networks when you click out, by hosting suppliers acting as processors, and by advisers or authorities where the law requires it. We do not pass your name or email to a casino when you click a ranking card.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">5. Microsoft Advertising</h2>
    <p class="mt-3">If Microsoft UET is active after you accept optional cookies, Microsoft may receive technical and usage data as an independent controller. See the Microsoft Privacy Statement for the detail and the controls available to you.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">6. Your UK GDPR rights</h2>
    <p class="mt-3">You can ask to access, correct, erase, restrict or object to processing, and to receive data you gave us in a portable format. You can withdraw analytics and advertising consent by clearing this site’s cookies and local storage. Email {{ SITE.emails.compliance }}. We reply within one month. You may also complain to the ICO at <a :href="LINKS.ico" class="text-copper-light underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">7. How long we keep it</h2>
    <ul class="mt-3 list-disc space-y-2 pl-5">
      <li>Analytics in aggregate: up to 26 months.</li>
      <li>Click identifiers in the browser: up to 90 days, or until you clear storage.</li>
      <li>Age and cookie flags: until you clear the browser.</li>
      <li>Server logs: up to 12 months.</li>
      <li>Email: up to 24 months after the matter closes.</li>
    </ul>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">8. Transfers outside the UK</h2>
    <p class="mt-3">Some suppliers, including Microsoft and Google, process data outside the UK. Transfers rely on UK adequacy decisions or the UK IDTA / UK Addendum to the EU SCCs, plus technical safeguards. Ask us if you want more detail.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">9. Cookies</h2>
    <p class="mt-3">Essential storage remembers your age check and cookie choice. Analytics and advertising tags run only if you accept them. Clearing cookies brings the banner back. Comparison tables still work if you choose essential only.</p>

    <h2 class="mt-8 font-display text-xl font-bold text-ink">10. Security and changes</h2>
    <p class="mt-3">The site is served over HTTPS and access is limited. Internet transmission is never perfectly secure. We may update this policy; the date at the top is the latest revision. Commercial relationships are described in the <RouterLink to="/advertiser-disclosure" class="text-copper-light underline">advertiser disclosure</RouterLink>.</p>
  </div>
</template>
