import { useState } from 'react'
import Img from './Img'
import SectionHead from './SectionHead'
import { ARRIVALS } from '../data/content'

export default function NewArrivals() {
  const [active, setActive] = useState(1)
  return (
    <section className="sec" id="new">
      <div className="dap" />
      <SectionHead eyebrow="New Arrivals" title="New Collections For Men" text="Fresh silhouettes. Timeless craftsmanship. Made for you." />
      <div className="arches">
        {ARRIVALS.map((a) => (
          <a key={a.n} className="arch" href="#best" onMouseEnter={() => setActive(a.n)}>
            <Img id={a.img} />
            <div className="lb gl"><h3>{a.title}</h3><p>{a.text}</p><span>Explore</span></div>
          </a>
        ))}
      </div>
      <p className="cn"><span>{active}</span> / {ARRIVALS.length}</p>
    </section>
  )
}
