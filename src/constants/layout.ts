import { NavEntry } from '@/types/layout'

/** Primary navigation links rendered in the header. */
const headerEntries: NavEntry[] = [
  {
    intent: 'url',
    href: '/',
    name: 'Home',
    isVisible: true
  }
]

/** Utility links rendered in the footer. */
const footerEntries: NavEntry[] = []

export { footerEntries, headerEntries }
