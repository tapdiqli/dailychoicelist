<script setup lang="ts">
import { ref } from 'vue'
import { SITE } from '@/data/site'

const name = ref('')
const email = ref('')
const department = ref('general')
const message = ref('')
const sent = ref(false)

function submit() {
  sent.value = true
}
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <h1 class="font-display text-4xl font-extrabold">Talk to the desk</h1>
    <p class="mt-4 text-base leading-relaxed text-muted">
      Questions about a review, a bonus clause, a licence change, or a commercial partnership can come here. We read everything that arrives on a weekday.
    </p>

    <div class="mt-8 grid gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-line bg-panel p-4">
        <h2 class="text-sm font-bold">Editorial</h2>
        <a :href="`mailto:${SITE.emails.editorial}`" class="mt-2 block text-sm text-copper-light">{{ SITE.emails.editorial }}</a>
        <p class="mt-2 text-xs text-muted">Corrections, RTP notes, FAQ follow-ups.</p>
      </article>
      <article class="rounded-2xl border border-line bg-panel p-4">
        <h2 class="text-sm font-bold">Compliance</h2>
        <a :href="`mailto:${SITE.emails.compliance}`" class="mt-2 block text-sm text-copper-light">{{ SITE.emails.compliance }}</a>
        <p class="mt-2 text-xs text-muted">Licence updates and safer-gambling queries.</p>
      </article>
      <article class="rounded-2xl border border-line bg-panel p-4">
        <h2 class="text-sm font-bold">Hours</h2>
        <p class="mt-2 text-sm text-muted">Replies within one working day, Monday–Friday, 09:00–18:00 GMT.</p>
      </article>
    </div>

    <form class="mt-10 space-y-4 rounded-3xl border border-line bg-panel p-6" @submit.prevent="submit">
      <h2 class="font-display text-xl font-bold">Send a note</h2>
      <p v-if="sent" class="rounded-xl border border-teal/40 bg-deep px-4 py-3 text-sm text-teal">
        Thanks. If this were connected to mail hosting, your message would now be with the desk. For now, please email us directly using the addresses above.
      </p>
      <template v-else>
        <label class="block text-sm">
          Full name
          <input v-model="name" required class="mt-1 w-full rounded-xl border border-line bg-deep px-3 py-2" />
        </label>
        <label class="block text-sm">
          Email
          <input v-model="email" type="email" required class="mt-1 w-full rounded-xl border border-line bg-deep px-3 py-2" />
        </label>
        <label class="block text-sm">
          Desk
          <select v-model="department" class="mt-1 w-full rounded-xl border border-line bg-deep px-3 py-2">
            <option value="general">General enquiry</option>
            <option value="editorial">Editorial & review correction</option>
            <option value="compliance">Compliance & UKGC</option>
            <option value="commercial">Commercial & advertising</option>
          </select>
        </label>
        <label class="block text-sm">
          Message
          <textarea v-model="message" required rows="5" class="mt-1 w-full rounded-xl border border-line bg-deep px-3 py-2" />
        </label>
        <button type="submit" class="rounded-full bg-copper px-5 py-2.5 text-sm font-bold text-deep">Submit enquiry</button>
      </template>
    </form>
  </div>
</template>
