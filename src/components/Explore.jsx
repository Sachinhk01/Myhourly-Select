import Img from './Img'
import SectionHead from './SectionHead'
import { EXPLORE } from '../data/content'

export default function Explore() {
  return (
    <section className="sec" id="explore">
      <SectionHead eyebrow="Discover" title="Explore The Collection" text="Timeless traditions. Modern stories." />
      <div className="xs">
        {EXPLORE.map((x) => (
          <a key={x.title} className="xc rv" href="#best">
            <Img id={x.img} />
            <div className="gl"><h3>{x.title}</h3><p>{x.text}</p><span className="link">Explore</span></div>
          </a>
        ))}
      </div>
    </section>
  )
}
