export const SITE = {
  name: 'Daily Choice List',
  domain: 'dailychoicelist.com',
  url: 'https://dailychoicelist.com',
  lastAudited: 'September 2026',
  helpline: '0808 8020 133',
  emails: {
    editorial: 'editorial@dailychoicelist.com',
    compliance: 'compliance@dailychoicelist.com',
  },
} as const

export const LINKS = {
  begambleaware: 'https://www.begambleaware.org',
  gamstop: 'https://www.gamstop.co.uk',
  gamcare: 'https://www.gamcare.org.uk',
  gordonMoody: 'https://www.gordonmoody.org.uk',
  ukgcRegister: 'https://www.gamblingcommission.gov.uk/public-register',
  ico: 'https://ico.org.uk',
  takeTimeToThink: 'https://www.taketimetothink.co.uk',
  saferGamblingWeek: 'https://www.safergamblingweek.org',
} as const

export const NAV = [
  { label: 'Home ranking', to: '/' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Safer play', to: '/responsible-gambling' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const LEGAL_NAV = [
  { label: 'Terms of use', to: '/terms' },
  { label: 'Privacy policy (UK GDPR)', to: '/privacy-policy' },
  { label: 'Advertiser disclosure', to: '/advertiser-disclosure' },
  { label: 'Contact', to: '/contact' },
] as const
