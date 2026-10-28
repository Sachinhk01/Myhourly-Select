import Img from './Img'
import SectionHead from './SectionHead'
import { useShop } from '../context/ShopContext'
import { BEST_SELLERS } from '../data/content'

export default function BestSellers() {
  const { wish, saveToWish, addToBag } = useShop()
  return (
    <section className="sec" id="best">
      <SectionHead eyebrow="MyHourly Select" title="Best Sellers" text="The pieces our customers reach for most." />
      <div className="bs">
        {BEST_SELLERS.map((p) => (
          <div key={p.name} className="pc rv" style={p.wide ? { gridColumn: 'span 2' } : undefined}>
            <Img id={p.img} />
            <div className="gl">
              <div><h3>{p.name}</h3><p>{p.price}</p></div>
              <div className="ac">
                <button aria-label={`Save ${p.name}`} onClick={() => saveToWish(p.name)}>
                  {wish.includes(p.name) ? 'Saved' : 'Save'}
                </button>
                <button onClick={() => addToBag(p.name)}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
