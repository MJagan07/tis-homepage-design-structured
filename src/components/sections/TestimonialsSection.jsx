import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { testimonials } from '../../data/schoolData'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]
  return (
    <section className="community-section">
      <div className="community-inner section-wrap">
        <Reveal className="community-intro"><SectionEyebrow>Our community</SectionEyebrow><h2>Growing takes<br />a <em>village.</em></h2><p>When school and family work together, young people have the support to take brave next steps.</p></Reveal>
        <Reveal className="quote-panel" delay={0.12}>
          <div className="quote-mark">“</div>
          <blockquote>{current.quote}</blockquote>
          <div className="quote-bottom"><div><strong>{current.name}</strong><span>{current.role}</span></div><div className="quote-controls"><button onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)} aria-label="Previous quote"><ArrowDownRight className="rotate-left" size={18} /></button><button onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next quote"><ArrowUpRight size={18} /></button></div></div>
          <div className="quote-dots">{testimonials.map((item, index) => <button key={item.name} aria-label={`Show quote ${index + 1}`} className={index === active ? 'active' : ''} onClick={() => setActive(index)} />)}</div>
        </Reveal>
      </div>
    </section>
  )
}
