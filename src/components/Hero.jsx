import Img from './Img'
import { ArrowIcon } from './Icons'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Img id="hero" className="hb" />
      <div className="shade" />

      <div className="hc">
        <p className="eb h"><span>Heritage, tailored for tomorrow</span><i /></p>
        <h1 className="h">Wear Your<br /><em>Heritage</em></h1>
        <p className="sub h">A story stitched into every thread.</p>
        <div className="cta h">
          <a className="bt" href="#new">Explore Collections <ArrowIcon /></a>
          <a className="bt o" href="#new">New Arrivals <ArrowIcon /></a>
        </div>
      </div>

      <p className="side h" aria-hidden="true">
        <span>A</span><span>Heritage</span><span>Woven For</span><span>Tomorrow</span><b />
      </p>
      <p className="tag h"><span>Timeless</span><span>Ethical</span><span>Exquisite</span></p>
    </header>
  )
}
