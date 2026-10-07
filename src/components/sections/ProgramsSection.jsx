import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function ProgramsSection() {
  return (
    <section className="learning-section section-wrap" id="learning">
      <div className="learning-heading">
        <Reveal><SectionEyebrow>Learning with intention</SectionEyebrow><h2>Room to wonder.<br /><em>Space to grow.</em></h2></Reveal>
        <Reveal delay={0.1}><p>When learning connects to real life, students discover that their ideas can make a difference.</p><a className="text-link" href="#admissions">Explore the Tulas experience <ArrowUpRight size={17} /></a></Reveal>
      </div>
      <Reveal className="learning-feature">
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=90" alt="Students collaborating in a bright classroom" loading="lazy" />
        <div className="feature-overlay" />
        <div className="feature-label"><span>LEARNING, REIMAGINED</span><ArrowUpRight size={19} /></div>
        <div className="feature-copy"><span className="feature-symbol">✳</span><h3>Find your spark.<br />Follow it further.</h3><p>Make space for the questions, discoveries and ideas that move us forward.</p></div>
      </Reveal>
    </section>
  )
}
