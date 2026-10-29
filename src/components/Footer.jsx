import { useState } from 'react'
import Lotus from './Lotus'

const S = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

const SHOP = [['New Arrivals', '#new'], ['Sherwanis', '#explore'], ['Kurta Sets', '#new'], ['Zardozi', '#craft'], ['Best Sellers', '#best']]
const ABOUT = [['Our Story', '#story'], ['Craftsmanship', '#craft'], ['Journal'], ['Care Guide'], ['Contact Us']]
const HELP = [['Track Your Order'], ['Shipping & Delivery'], ['Returns & Exchanges'], ['Size Guide'], ['FAQs'], ['Contact Support']]

const List = ({ title, items }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {items.map(([label, href]) => (
        <li key={label}>{href ? <a href={href}>{label}</a> : label}</li>
      ))}
    </ul>
  </div>
)

export default function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setJoined(true)
  }

  return (
    <div className="ftw">
      <section className="fin">
        <Lotus w={34} />
        <p className="fm">More than fashion</p>
        <p className="fs">A feeling</p>
        <i />
        <p className="ft">Rooted in tradition. Woven for tomorrow.<br />Thank you for being a part of our story.</p>
      </section>

      <footer>
        <div className="fg">
          <div className="fb">
            <div className="lg">
              <span className="mono">H</span>
              <b>MYHOURLY</b>
              <small>SELECT</small>
            </div>
            <p>Heritage menswear, tailored for tomorrow.</p>
            <p className="sc">Tradition<br />&nbsp;&nbsp;&nbsp;Lives Beautifully</p>
          </div>
          <List title="Shop" items={SHOP} />
          <List title="About" items={ABOUT} />
          <List title="Help" items={HELP} />
          <div>
            <h4>Stay in touch</h4>
            <p className="nt">Be the first to know about new collections, exclusive offers and stories from our artisans.</p>
            <form className="nl" onSubmit={onSubmit}>
              <input type="email" placeholder="Your email address" aria-label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <button aria-label="Join"><svg {...S}><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
            </form>
            {joined && <p className="nt">Thank you for joining.</p>}
            <div className="so">
              <a href="#top" aria-label="Instagram"><svg {...S}><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.8" cy="7.2" r=".6" /></svg></a>
              <a href="#top" aria-label="Facebook"><svg {...S}><path d="M14 8h2V4.5h-2.5C11 4.5 10 6 10 8v2H8v3.5h2V20h3.5v-6.5H16l.5-3.5h-3V8.6c0-.4.2-.6.5-.6z" /></svg></a>
              <a href="#top" aria-label="YouTube"><svg {...S}><rect x="3" y="6" width="18" height="12" rx="3.5" /><path d="M10.5 9.5v5l4-2.5z" /></svg></a>
              <a href="#top" aria-label="WhatsApp"><svg {...S}><path d="M4 20l1.2-4A8 8 0 1 1 8 18.8L4 20z" /><path d="M9 9c.5 2.5 2.5 4.5 5 5l1-1.2-1.8-1-1 .7c-.8-.4-1.5-1.1-1.9-1.9l.7-1L10.8 7 9 9z" /></svg></a>
            </div>
          </div>
        </div>

        <div className="dv" />
        <div className="fbar">
          <span>© 2026 MyHourly Select. All rights reserved.</span>
          <span className="fl2">Privacy Policy &nbsp;|&nbsp; Terms &amp; Conditions &nbsp;|&nbsp; Sitemap</span>
          <a href="#top" className="btt"><span><svg {...S}><path d="M12 19V5M6 11l6-6 6 6" /></svg></span>Back to top</a>
        </div>
      </footer>
    </div>
  )
}
