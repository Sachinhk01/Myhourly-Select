import Lotus from './Lotus'

const S = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1, strokeLinecap: 'round', strokeLinejoin: 'round' }

const ITEMS = [
  { icon: <Lotus w={36} />, label: ['Authentic', 'Craftsmanship'] },
  { icon: <svg {...S}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /></svg>, label: ['Premium', 'Quality'] },
  { icon: <svg {...S}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>, label: ['Safe & Reliable', 'Shipping'] },
  { icon: <svg {...S}><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.5 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z" /></svg>, label: ['Loved', 'By Thousands'] }
]

export default function TrustBar() {
  return (
    <div className="tr">
      {ITEMS.map((t) => (
        <div key={t.label[0]} className="ti rv">
          {t.icon}
          <span>{t.label[0]}<br />{t.label[1]}</span>
        </div>
      ))}
    </div>
  )
}
