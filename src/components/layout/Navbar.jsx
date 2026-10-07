import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/schoolData'

export function Navbar({ themeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Tulas International School home" onClick={closeMenu}>
        <span className="brand-mark"><span>T</span></span>
        <span className="brand-copy">
          <strong>TULAS</strong>
          <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>

      <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
        {themeToggle}
        <a className="nav-cta" href="#admissions" onClick={closeMenu}>Enquire now <ArrowUpRight size={16} /></a>
      </nav>

      <div className="mobile-actions">
        {themeToggle}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {menuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight size={17} /></a>)}
            <a className="mobile-menu-cta" href="#admissions" onClick={closeMenu}>Enquire now <ArrowUpRight size={17} /></a>
          </div>
      )}
    </header>
  )
}
