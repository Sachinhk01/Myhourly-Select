import { MARQUEE } from '../data/content'

const SEP = '\u00a0\u00a0✦\u00a0\u00a0'
const text = (MARQUEE.join(SEP) + SEP).repeat(8)

export default function Marquee() {
  return (
    <div className="mq"><div>{text}</div></div>
  )
}
