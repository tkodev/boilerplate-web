import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

/*
 * A custom font-size ramp in `theme.css` (`--text-h1`, `--text-e1`) must be registered here,
 * or twMerge reads `text-h1` as a text color and lets it survive alongside a real one:
 *
 *   const twMerge = extendTailwindMerge({
 *     extend: { classGroups: { 'font-size': [{ text: ['h1', 'h2'] }] } }
 *   })
 */
const twMerge = extendTailwindMerge({})

/**
 * Compose class names with `clsx` then dedupe with the theme-aware `twMerge`; the single className entry point for components.
 *
 * @param inputs - Class values in any `clsx`-accepted form.
 * @returns The merged, conflict-resolved className string.
 */
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export { cn }
/** Re-export `cva` and `VariantProps` so components import variants and the className helper from one place. */
export { cva } from 'class-variance-authority'
export type { VariantProps } from 'class-variance-authority'
