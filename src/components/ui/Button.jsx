import { ArrowUpRight } from 'lucide-react'

export function Button({ href, children, variant = 'dark', className = '' }) {
  return <a className={`button button-${variant} ${className}`.trim()} href={href}>{children}<ArrowUpRight size={17} /></a>
}
