import Img from './Img'
import SectionHead from './SectionHead'
import { ZARDOZI } from '../data/content'

export default function Zardozi() {
  return (
    <section className="sec zd" id="craft">
      <div className="zside">
        <span>Heritage</span><span>Inspiration</span><span>Modern</span><span>Expressions</span>
      </div>

      <SectionHead eyebrow="Rooted in Indian artistry" title="Zardozi Collection" text="Gold thread. Heritage. Craftsmanship. Woven into every story." />

      <div className="zg">
        <div className="zm rv">
          <Img id="zmain" />
          <div className="zt">
            <div>
              <svg width="40" height="28" viewBox="0 0 38 26" fill="none" stroke="currentColor" strokeWidth="1.1">
                <path d="M19 3c-3 4-3 11 0 16 3-5 3-12 0-16z" />
                <path d="M19 19C14 17 11 12 12 7c4 2 6 6 7 12z" />
                <path d="M19 19c5-2 8-7 7-12-4 2-6 6-7 12z" />
                <path d="M19 19C12 19 6 16 4 11c5 0 11 3 15 8z" />
                <path d="M19 19c7 0 13-3 15-8-5 0-11 3-15 8z" />
              </svg>
              <p className="zv">Rooted<br />In Indian<br />Artistry</p>
            </div>
            <div className="zq">
              <em>A canvas of tradition, for today’s world.</em>
              <hr />
              <a className="zb" href="#best">Explore Zardozi →</a>
            </div>
          </div>
        </div>

        <div className="kr">
          {ZARDOZI.map((k) => (
            <div key={k.title} className="kc rv">
              <Img id={k.img} />
              <div className="gl"><h3>{k.title}</h3><p>{k.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
