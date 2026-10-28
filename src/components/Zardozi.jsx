import Img from './Img'
import { ZARDOZI } from '../data/content'

export default function Zardozi() {
  return (
    <section className="sec her" id="craft">
      <Img id="craft" />
      <div className="rv">
        <p className="eb">Rooted in Indian artistry</p>
        <h2>Zardozi Collection</h2>
        <p>Hand-embroidered gold thread, worked by artisans over days, finished into pieces you will keep for decades.</p>
        <a className="bt" href="#best">Explore Zardozi</a>
      </div>
      <div className="kr">
        {ZARDOZI.map((k) => (
          <div key={k.title} className="kc rv">
            <Img id={k.img} />
            <div className="gl"><h3>{k.title}</h3><p>{k.text}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}
