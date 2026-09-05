import { computed, ref } from 'vue'

const AGE_KEY = 'dcl-age-confirmed'
const COOKIE_KEY = 'dcl-cookie-choice'

function readStore(key: string) {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStore(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* ignore quota / private mode */
  }
}

const ageConfirmed = ref(readStore(AGE_KEY) === '1')
const cookieChoice = ref<'all' | 'essential' | null>(
  (readStore(COOKIE_KEY) as 'all' | 'essential' | null) ?? null,
)
const disclosureOpen = ref(false)

export function useSiteState() {
  const showAgeGate = computed(() => !ageConfirmed.value)
  const showCookies = computed(() => ageConfirmed.value && !cookieChoice.value)

  function confirmAge() {
    writeStore(AGE_KEY, '1')
    ageConfirmed.value = true
  }

  function setCookies(choice: 'all' | 'essential') {
    writeStore(COOKIE_KEY, choice)
    cookieChoice.value = choice
  }

  return {
    ageConfirmed,
    cookieChoice,
    disclosureOpen,
    showAgeGate,
    showCookies,
    confirmAge,
    setCookies,
  }
}
