import Img from './Img'

export default function Story() {
  return (
    <section className="sec" id="story">
      <div className="sty">
        <div className="sa rv"><Img id="story" /></div>
        <div className="rv">
          <p className="eb">Our Story</p>
          <h2>Tradition lives<br /><em>beautifully.</em></h2>
          <hr />
          <p>We curate sherwanis, kurtas and bandhgalas that carry India’s finest craftsmanship into the way you dress today.</p>
          <p className="it">Rooted in tradition. Cut for tomorrow.</p>
          <a className="bt o" href="#top">Discover our story →</a>
        </div>
      </div>
    </section>
  )
}
