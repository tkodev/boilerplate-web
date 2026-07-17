import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { headerEntries } from '@/constants/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full border-b'),
  bar: cva('gap-lg mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4'),
  brand: cva('font-body font-bold'),
  nav: cva('gap-md flex items-center'),
  link: cva('text-muted-foreground hover:text-foreground transition-colors')
}

type HeaderRef = HTMLElement
type HeaderProps = HTMLAttributes<HeaderRef> & VariantProps<typeof styles.root>

const Header = forwardRef<HeaderRef, HeaderProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // render vars
  const entries = headerEntries.filter((entry) => entry.isVisible)

  // jsx
  return (
    <header ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.bar())}>
        <Link className={cn(styles.brand())} href="/">
          Boilerplate
        </Link>
        <nav className={cn(styles.nav())} aria-label="Primary">
          {entries.map((entry) => (
            <Link key={entry.href} className={cn(styles.link())} href={entry.href ?? '/'}>
              {entry.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
})
Header.displayName = 'Header'

export { Header }
export type { HeaderProps, HeaderRef }
