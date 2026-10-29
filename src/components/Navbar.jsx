import { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext'
import { NAV_LEFT, NAV_RIGHT } from '../data/content'

const S = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
const Search = () => <svg {...S}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
const User = () => <svg {...S}><circle cx="12" cy="8" r="4" /><path d="M4.5 20c.8-4 4-6 7.5-6s6.7 2 7.5 6" /></svg>
const Heart = () => <svg {...S}><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.5 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z" /></svg>
const Bag = () => <svg {...S}><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></svg>

export default function Navbar() {
  const { bag, wish, openDrawer } = useShop()
  const [sc, setSc] = useState(false)

  useEffect(() => {
    const f = () => setSc(window.scrollY > 80)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <nav className={sc ? 'sc' : ''}>
      <div className="nav-left">
        <div className="lk l">
          {NAV_LEFT.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
      </div>
      <a className="lg" href="#top" aria-label="MyHourly Select home">
        <span className="mono">H</span>
        <b>MYHOURLY</b>
        <small>SELECT</small>
      </a>
      <div className="nav-right">
        <div className="lk r">
          {NAV_RIGHT.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className="ic">
          <button aria-label="Search"><Search /></button>
          <button aria-label="Account"><User /></button>
          <button aria-label="Wishlist" onClick={() => openDrawer('wish')}><Heart />{wish.length > 0 && <i>{wish.length}</i>}</button>
          <button aria-label="Bag" onClick={() => openDrawer('bag')}><Bag />{bag.length > 0 && <i>{bag.length}</i>}</button>
        </div>
      </div>
    </nav>
  )
}
