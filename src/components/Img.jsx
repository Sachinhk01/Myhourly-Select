import { useEffect, useState } from 'react'
import { IMG } from '../data/images'

// Background image that fades in after it has loaded (same behaviour as the template).
export default function Img({ id, className = '' }) {
  const [src, setSrc] = useState(null)

  useEffect(() => {
    const i = new Image()
    i.onload = () => setSrc(i.src)
    i.src = IMG[id]
    return () => { i.onload = null }
  }, [id])

  return <div className={`im ${className}`.trim()} style={src ? { backgroundImage: `url(${src})` } : undefined} />
}
