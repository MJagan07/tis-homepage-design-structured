import { ArrowUpRight } from 'lucide-react'
import { campusFeatures } from '../../data/schoolData'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function CampusSection() {
  return (
    <section className="campus-section section-wrap" id="campus">
      <div className="section-topline"><SectionEyebrow>Life at Tulas</SectionEyebrow><span className="section-number">02 — EVERYDAY DISCOVERY</span></div>
      <div className="campus-heading"><Reveal><h2>A campus full<br />of <em>possibility.</em></h2></Reveal><Reveal delay={0.1}><p>Learning happens everywhere: in shared projects, new friendships, creative experiments and the small moments that build lasting confidence.</p></Reveal></div>
      <div className="campus-grid">
        {campusFeatures.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.09} className={`campus-card ${feature.className}`}>
            <div className="campus-image"><img src={feature.image} alt={feature.title} loading="lazy" /><span className="campus-arrow"><ArrowUpRight size={19} /></span></div>
            <div className="campus-card-copy"><span className="card-tag">{feature.tag}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
