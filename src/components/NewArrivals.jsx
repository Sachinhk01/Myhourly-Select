import { useState } from 'react'
import Img from './Img'
import SectionHead from './SectionHead'
import { ARRIVALS } from '../data/content'

const Arrow = ({ d }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

export default function NewArrivals() {
  const [active, setActive] = useState(1)
  const total = ARRIVALS.length
  const pad = (n) => String(n).padStart(2, '0')
  const prev = () => setActive((a) => ((a - 2 + total) % total) + 1)
  const next = () => setActive((a) => (a % total) + 1)

  return (
    <section className="sec" id="new">
      <div className="dap" />

      <div className="side l">
        <svg width="40" height="28" viewBox="0 0 38 26" fill="none" stroke="currentColor" strokeWidth="1.1">
          <path d="M19 3c-3 4-3 11 0 16 3-5 3-12 0-16z" />
          <path d="M19 19C14 17 11 12 12 7c4 2 6 6 7 12z" />
          <path d="M19 19c5-2 8-7 7-12-4 2-6 6-7 12z" />
          <path d="M19 19C12 19 6 16 4 11c5 0 11 3 15 8z" />
          <path d="M19 19c7 0 13-3 15-8-5 0-11 3-15 8z" />
        </svg>
        <p>Modern<br />Rooted<br />Always<br />You</p>
        <i />
      </div>

      <div className="side r">
        <p>Elegance<br />Lives<br />In Every<br />Detail</p>
        <i />
      </div>

      <SectionHead eyebrow="New Arrivals" title="New Collections For Men" text="Fresh silhouettes. Timeless craftsmanship. Made for you." />

      <div className="arches">
        {ARRIVALS.map((a) => (
          <a key={a.n} className={'arch' + (active === a.n ? ' on' : '')} href="#best" onMouseEnter={() => setActive(a.n)}>
            <Img id={a.img} />
            <div className="lb gl">
              <small className="eb" style={{ fontSize: '.62rem' }}>New collection</small>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <span>Explore</span>
            </div>
          </a>
        ))}
      </div>

      <div className="ctl">
        <button onClick={prev} aria-label="Previous"><Arrow d="M19 12H5M11 6l-6 6 6 6" /></button>
        <span>{pad(active)}</span>
        <hr />
        <span>{pad(total)}</span>
        <button onClick={next} aria-label="Next"><Arrow d="M5 12h14M13 6l6 6-6 6" /></button>
      </div>

      <p className="made">Made<br />For<br />What’s Next</p>
    </section>
  )
}
