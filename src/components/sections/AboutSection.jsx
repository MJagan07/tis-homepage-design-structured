import { ArrowUpRight, Heart, MessagesSquare, Sparkles } from 'lucide-react'
import { learningPillars } from '../../data/schoolData'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function AboutSection() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="section-topline"><SectionEyebrow>More than a school</SectionEyebrow><span className="section-number">01 — OUR APPROACH</span></div>
      <div className="about-grid">
        <Reveal className="about-heading">
          <h2>Education for<br />the <em>whole</em> person.</h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <p className="lead-copy">A great education is about more than what you know. It is about who you become along the way.</p>
          <p>At Tulas International School, our ambition is to nurture thoughtful learners who ask meaningful questions, act with empathy and meet the world with confidence.</p>
          <a className="text-link" href="#learning">Get to know our approach <ArrowUpRight size={17} /></a>
        </Reveal>
      </div>
      <div className="values-strip">
        <div className="value-intro"><span className="mini-star">✳</span><span>What guides us</span></div>
        {learningPillars.map((item, index) => {
          const Icon = item.icon === 'sparkles' ? Sparkles : item.icon === 'messages' ? MessagesSquare : Heart
          return (
            <Reveal key={item.number} delay={index * 0.08} className="value-item">
              <div className="value-number">{item.number}</div>
              <Icon size={20} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
