import { useShop } from '../context/ShopContext'
import { NAV_LEFT, NAV_RIGHT } from '../data/content'

export default function Navbar() {
  const { bag, wish, openDrawer } = useShop()
  return (
    <nav>
      <div className="lk">
        {NAV_LEFT.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
      </div>
      <a className="lg" href="#top"><b>MYHOURLY</b><small>SELECT</small></a>
      <div className="lk r">
        {NAV_RIGHT.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <button aria-label="Wishlist" onClick={() => openDrawer('wish')}>Wishlist <i>{wish.length}</i></button>
        <button aria-label="Bag" onClick={() => openDrawer('bag')}>Bag <i>{bag.length}</i></button>
      </div>
    </nav>
  )
}
