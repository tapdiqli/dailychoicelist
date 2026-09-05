export type Casino = {
  id: string
  name: string
  rank: number
  badge: string
  href: string
  rating: string
  highlight: string
  summary: string
  features: string[]
  image: string
  featured: boolean
}

export const CASINOS: Casino[] = [
  {
    id: 'mrq',
    name: 'MrQ',
    rank: 1,
    badge: "Editor's pick",
    href: 'https://mrq.com/',
    rating: '10.0',
    highlight: 'Fast ID checks',
    summary:
      'A sleek British-facing product with a mobile-first lobby, quick Open Banking rails, and a clean account area that is easy to navigate on a phone.',
    features: ['UKGC licensed', 'Built for mobile', 'Trustly in minutes'],
    image: '/brands/mrq.png',
    featured: true,
  },
  {
    id: 'lottomart',
    name: 'Lottomart',
    rank: 2,
    badge: 'Crowd favourite',
    href: 'https://lottomart.com/',
    rating: '9.9',
    highlight: 'Visa Direct payouts',
    summary:
      'A long-running games-room brand with lottery-style jackpots, a tidy app, and a familiar layout that many UK players already recognise.',
    features: ['UKGC licensed', 'Jackpots & draws', 'Polished app'],
    image: '/brands/lottomart.png',
    featured: false,
  },
]
