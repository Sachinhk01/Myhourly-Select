import Img from './Img'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Img id="hero" className="hb" />
      <div className="shade" />
      <div className="hc">
        <p className="eb h">Heritage, tailored for tomorrow</p>
        <h1 className="h">Wear Your<br /><em>Heritage</em></h1>
        <p className="sub h">A story stitched into every thread.</p>
        <div className="h">
          <a className="bt" href="#explore">Explore Collections</a>
          <a className="bt o" href="#new">New Arrivals</a>
        </div>
      </div>
    </header>
  )
}
