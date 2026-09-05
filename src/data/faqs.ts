export type FaqCategory =
  | 'all'
  | 'safety'
  | 'bonuses'
  | 'payments'
  | 'games'
  | 'safer'

export type FaqItem = {
  id: string
  category: Exclude<FaqCategory, 'all'>
  question: string
  answer: string[]
}

export const FAQ_FILTERS: { id: FaqCategory; label: string }[] = [
  { id: 'all', label: 'All questions' },
  { id: 'safety', label: 'UKGC & safety' },
  { id: 'bonuses', label: 'Offers & wagering' },
  { id: 'payments', label: 'Payments & ID' },
  { id: 'games', label: 'Games & RTP' },
  { id: 'safer', label: 'Safer gambling' },
]

export const FAQS: FaqItem[] = [
  {
    id: 'licensed',
    category: 'safety',
    question: 'Does every casino on Daily Choice List hold a UKGC licence?',
    answer: [
      'Yes. We only publish operators that currently appear on the UK Gambling Commission public register.',
      'That licence is the reason player balances sit in segregated accounts, game RNGs are lab-tested, UK GDPR and ASA rules apply, and GAMSTOP coverage is mandatory.',
    ],
  },
  {
    id: 'check-licence',
    category: 'safety',
    question: 'How can I double-check a casino’s UKGC licence myself?',
    answer: [
      'Open the operator’s footer and look for the account number plus a link through to the Commission register. You can also search the brand on gamblingcommission.gov.uk before you create an account.',
    ],
  },
  {
    id: 'tax',
    category: 'safety',
    question: 'Do UK players pay tax on online casino winnings?',
    answer: [
      'No. Recreational players in the UK do not pay income tax or capital gains tax on casino winnings. Licensed operators settle gambling duty with HMRC, so net payouts are yours to keep.',
    ],
  },
  {
    id: 'wagering',
    category: 'bonuses',
    question: 'What does a wagering requirement actually mean?',
    answer: [
      'It is the total stake you must place before bonus money, or winnings that came from bonus money, can be withdrawn as cash.',
      'A 30x bonus-only clause on a £10 bonus means £300 of qualifying bets. A 35x deposit-plus-bonus clause on a £10 deposit and £10 bonus means £700 of qualifying bets.',
      'Always read the micro print. Some brands, including MrQ, run no-wagering extra spins where resulting cash can be withdrawn without a playthrough multiplier.',
    ],
  },
  {
    id: 'spins',
    category: 'bonuses',
    question: 'How do “bonus spins” differ from “free spins” in UK ads?',
    answer: [
      'ASA rules reserve “free spins” for offers with no wagering on the spins or on the winnings they create. If a playthrough rule applies, the copy should say bonus spins or extra spins instead.',
    ],
  },
  {
    id: 'ewallets',
    category: 'bonuses',
    question: 'Will Skrill or Neteller still unlock a welcome offer?',
    answer: [
      'Often not. Plenty of UK rooms exclude those wallets, and some prepaid cards, from first-time promotions. Debit cards, Trustly/Open Banking, and Apple Pay are the more reliable routes if you want the advertised extra.',
    ],
  },
  {
    id: 'kyc',
    category: 'payments',
    question: 'How long do identity checks take at a typical UK casino?',
    answer: [
      'UKGC KYC rules mean name, age, address and identity must be confirmed before real-money play. Most UK residents clear automated eKYC at sign-up. If a passport, driving licence or utility bill is requested, well-run rooms usually finish that review within 1–24 hours.',
    ],
  },
  {
    id: 'payouts',
    category: 'payments',
    question: 'Which UK payment rails tend to land withdrawals first?',
    answer: [
      'Times vary by brand and by method, but a useful rule of thumb is: Trustly/Open Banking from a few minutes to a couple of hours; Visa Direct/Fast Funds often under four hours; PayPal or Apple Pay from one to twelve hours; standard debit cards one to three working days.',
    ],
  },
  {
    id: 'credit-cards',
    category: 'payments',
    question: 'Can I gamble with a credit card at a UK online casino?',
    answer: [
      'No. Since April 2020 the UKGC has banned credit cards for remote and land-based gambling. Debit cards, bank transfer, and approved wallets funded from debit sources are the permitted options.',
    ],
  },
  {
    id: 'rtp',
    category: 'games',
    question: 'What is RTP and why should I look at it?',
    answer: [
      'Return-to-player is the long-run share of stakes a game is designed to pay back. A 97% RTP slot theoretically returns £97 of every £100 staked across a huge sample of rounds. Higher published RTPs (often 96%+ on slots) generally stretch a bankroll further. Short sessions can still swing either way.',
    ],
  },
  {
    id: 'fair',
    category: 'games',
    question: 'Are UKGC casino games fair, or can they be rigged?',
    answer: [
      'On licensed sites, outcomes come from RNGs that independent labs such as eCOGRA, GLI and iTech Labs test on an ongoing basis. That is a legal requirement, not a marketing extra.',
    ],
  },
  {
    id: 'ranking',
    category: 'safety',
    question: 'How does Daily Choice List score and order UK casinos?',
    answer: [
      'Position starts with a live UKGC licence, then cashout timings, mobile layout, support, and whether the published terms hold up when we read them. A commercial relationship can decide if a brand is on the page; it cannot skip those checks.',
    ],
  },
  {
    id: 'tools',
    category: 'safer',
    question: 'Which safer gambling tools should I switch on?',
    answer: [
      'Every UKGC licensee must offer deposit caps (daily, weekly or monthly), session reminders and reality checks, cooling-off pauses from 24 hours to six weeks, and self-exclusion on that brand for six months up to five years. Set the limits before you deposit.',
    ],
  },
  {
    id: 'gamstop',
    category: 'safer',
    question: 'What is GAMSTOP and how do I use it?',
    answer: [
      'GAMSTOP is the free national self-exclusion scheme. Once you enrol, GB-licensed websites and apps must block you for the period you choose: six months, one year, or five years. Every operator we list is required to take part.',
    ],
  },
]
