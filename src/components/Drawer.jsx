import { useEffect } from 'react'
import { useShop } from '../context/ShopContext'

export default function Drawer() {
  const { bag, wish, drawer, closeDrawer } = useShop()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeDrawer()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeDrawer])

  const isBag = drawer === 'bag'
  const items = isBag ? bag : wish
  const empty = isBag
    ? 'Your bag is empty. Add a piece from Best Sellers.'
    : 'Nothing saved yet. Tap Save on a piece you love.'

  return (
    <aside id="dr" className={drawer ? 'on' : ''} aria-live="polite">
      <h3>
        <span>{isBag ? 'Your Bag' : 'Wishlist'}</span>
        <button aria-label="Close" onClick={closeDrawer}>✕</button>
      </h3>
      <ul>
        {items.length
          ? items.map((x, i) => <li key={`${x}-${i}`}>{x}</li>)
          : <li className="em">{empty}</li>}
      </ul>
    </aside>
  )
}
