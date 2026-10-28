import { useState } from 'react'
import { FOOTER_SHOP, FOOTER_HELP } from '../data/content'

const List = ({ title, items }) => (
  <div>
    <h4>{title}</h4>
    <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
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
    <footer>
      <div className="fg">
        <div>
          <span className="mono s">H</span>
          <h4 style={{ marginTop: '.8rem' }}>MyHourly Select</h4>
          <ul><li>Heritage menswear, tailored for tomorrow.</li></ul>
        </div>
        <List title="Shop" items={FOOTER_SHOP} />
        <List title="Help" items={FOOTER_HELP} />
        <div>
          <h4>Stay in touch</h4>
          <ul><li>New collections and stories from our artisans.</li></ul>
          <form className="nl" onSubmit={onSubmit}>
            <input type="email" placeholder="Your email" aria-label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button>{joined ? 'Thank you' : 'Join'}</button>
          </form>
        </div>
      </div>
      <p className="cp2">© 2026 MyHourly Select. All rights reserved.</p>
    </footer>
  )
}
