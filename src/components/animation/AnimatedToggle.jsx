import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export function AnimatedToggle({ dark, onToggle }) {
  return <motion.button className="theme-toggle" onClick={onToggle} whileTap={{ scale: 0.9, rotate: -12 }} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={dark} type="button">{dark ? <Sun size={17} /> : <Moon size={17} />}</motion.button>
}
