import { TRUST } from '../data/content'

export default function TrustBar() {
  return (
    <div className="tr">
      {TRUST.map((t) => (
        <div key={t.title} className="rv"><b>{t.title}</b>{t.text}</div>
      ))}
    </div>
  )
}
