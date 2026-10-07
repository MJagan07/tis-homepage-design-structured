import { motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function HeroSection() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <Reveal><SectionEyebrow>A place to become</SectionEyebrow></Reveal>
        <Reveal delay={0.08}>
          <h1>Big dreams<br />begin <em>here.</em></h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="hero-description">A learning community where curiosity is encouraged, confidence takes root and every student is inspired to shape their own future.</p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="hero-actions">
            <a className="button button-dark" href="#admissions">Explore admissions <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#about">Discover Tulas <ArrowDownRight size={18} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero-note">
            <div className="note-avatars" aria-hidden="true"><span>✳</span><span>✦</span><span>✧</span></div>
            <p><strong>Learn with purpose.</strong><br />Grow into who you can be.</p>
          </div>
        </Reveal>
      </div>

      <div className="hero-visual">
        <motion.div className="hero-image-wrap" initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }}>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1500&q=90"
            alt="Bright school campus with an inviting learning environment"
          />
          <div className="image-wash" />
          <div className="image-caption"><span>01 / A world of possibility</span><ArrowUpRight size={18} /></div>
        </motion.div>
        <motion.div className="hero-sticker" initial={{ rotate: 15, scale: 0.6, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ delay: 0.45, type: 'spring', stiffness: 150 }}>
          <span className="sticker-icon">✳</span>
          <span>Curious<br />by nature</span>
        </motion.div>
        <div className="hero-side-label">LEARN · LEAD · FLOURISH</div>
      </div>

      <a href="#about" className="scroll-cue"><span><ArrowDown size={15} /></span>SCROLL TO EXPLORE</a>
      <div className="hero-index">TIS <span>—</span> 01</div>
    </section>
  )
}
