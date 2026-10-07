import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('tis-theme') === 'dark' } catch { return false } })
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('tis-theme', dark ? 'dark' : 'light') } catch { /* Storage may be unavailable. */ }
  }, [dark])
  return { dark, setDark, toggleTheme: () => setDark((value) => !value) }
}
