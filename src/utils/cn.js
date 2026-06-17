/**
 * Utility to conditionally join class names together.
 * Lightweight alternative to the `clsx` or `classnames` packages.
 *
 * Usage: cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
