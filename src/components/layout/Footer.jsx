import { MoveUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand footer-brand" href="#home"><span className="brand-mark"><span>T</span></span><span className="brand-copy"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span></a>
      <p>Learn with purpose. Grow with confidence.</p>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Tulas International School</span><a href="https://tis.edu.in/" target="_blank" rel="noreferrer">Official school website <MoveUpRight size={14} /></a><a href="#home">Back to top ↑</a></div>
    </footer>
  )
}
