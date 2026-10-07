import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function CTASection() {
  return (
    <section className="admissions-section section-wrap" id="admissions">
      <Reveal className="admissions-card">
        <div className="admissions-decoration">✳</div>
        <div className="admissions-content"><SectionEyebrow>Your next chapter</SectionEyebrow><h2>Let's make room<br />for <em>what's next.</em></h2><p>Start a conversation with our team and discover whether Tulas is the right place for your family's learning journey.</p><a className="button button-light" href="https://tis.edu.in/" target="_blank" rel="noreferrer">Connect with Tulas <ArrowUpRight size={17} /></a></div>
        <div className="admissions-aside"><span>GOOD THINGS<br />START WITH<br /><em>A QUESTION.</em></span><div className="aside-line" /><span className="aside-small">WE'RE HERE TO HELP YOU EXPLORE.</span></div>
      </Reveal>
    </section>
  )
}
