import type { Casino } from './casinos'

// Alternate brand set shown to visitors arriving with a Bing click id
// (msclkid query param longer than 6 chars). The href below is the base
// tracking link — the visitor's msclkid is appended as `visit_id` at
// render time, so don't add it here.
//
// TODO: drop real logo files into /public/brands and update `image`,
// then swap in the real bonus copy for `highlight` / `summary`.

// Pool of USPs that get randomly shuffled per brand below so the cards
// don't all show the exact same three bullet points.
const USP_POOL = [
  'Instant withdrawals',
  'Big welcome bonus',
  'Mobile friendly',
  '24/7 live support',
  'Hundreds of slots',
  'Daily free spins',
  'VIP loyalty rewards',
  'Crypto deposits',
  'Low wagering',
  'New games weekly',
  'Fast sign-up',
  'Live dealer tables',
]

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function randomUsps(count = 3): string[] {
  return shuffle(USP_POOL).slice(0, count)
}

type AltCasinoBase = Omit<Casino, 'features'>

const ALT_CASINO_BASE: AltCasinoBase[] = [
  {
    id: 'rollyspin',
    name: 'Rolly Spin',
    rank: 1,
    badge: "Editor's pick",
    href: 'https://rollyspin19.net/dusjc5gyt/?campaign_id=Bing-UK01RG&visit_id=',
    rating: '10.0',
    highlight: '725% up to £ 6250 + 425FS',
    summary: 'Placeholder summary — replace with real bonus copy for Rolly Spin.',
    image: '/brands/rollyspin.svg',
    featured: true,
  },
  {
    id: 'spinyrush',
    name: 'Spiny Rush',
    rank: 2,
    badge: 'Crowd favourite',
    href: 'https://spinyrush777.net/dk8hh8fh8/?campaign_id=Bing-UK01RG&visit_id=',
    rating: '9.9',
    highlight: '725% up to £ 6250 + 425FS',
    summary: 'Spiny Rush is a new online casino that offers a wide range of games and a great welcome bonus.',
    image: '/brands/spinyrush.svg',
    featured: false,
  },
  {
    id: 'superspins',
    name: 'Super Spins',
    rank: 3,
    badge: 'Top rated',
    href: 'https://superspins777.net/d3gpklnrj/?campaign_id=Bing-UK01RG&visit_id=',
    rating: '9.8',
    highlight: '725% up to £ 6250 + 425FS',
    summary: 'Super Spins is a new online casino that offers a wide range of games and a great welcome bonus.',
    image: '/brands/superspin.svg',
    featured: false,
  },
  {
    id: 'spinreelz',
    name: 'Spin Reelz',
    rank: 4,
    badge: 'Trending',
    href: 'https://spinreelz777.net/d6eexzjtv/?campaign_id=Bing-UK01RG&visit_id=',
    rating: '9.7',
    highlight: '725% up to £ 6250 + 425FS',
    summary: 'Placeholder summary — replace with real bonus copy for Spin Reelz.',
    image: '/brands/spinreelz.svg',
    featured: false,
  },
]

export const ALT_CASINOS: Casino[] = ALT_CASINO_BASE.map((casino) => ({
  ...casino,
  features: randomUsps(3),
}))
