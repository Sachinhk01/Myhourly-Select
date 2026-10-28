import { useRef, useState } from 'react'
import useSmoothScroll from './hooks/useSmoothScroll'
import useIntro from './hooks/useIntro'
import useScrollAnimations from './hooks/useScrollAnimations'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import NewArrivals from './components/NewArrivals'
import Explore from './components/Explore'
import Zardozi from './components/Zardozi'
import BestSellers from './components/BestSellers'
import TrustBar from './components/TrustBar'
import Story from './components/Story'
import Footer from './components/Footer'
import Drawer from './components/Drawer'

export default function App() {
  const root = useRef(null)
  const [introDone, setIntroDone] = useState(false)
  const lenisRef = useSmoothScroll()

  useIntro(root, lenisRef, () => setIntroDone(true))
  useScrollAnimations(root)

  return (
    <div ref={root}>
      {!introDone && <Intro />}
      <Navbar />
      <Hero />
      <Marquee />
      <NewArrivals />
      <Explore />
      <Zardozi />
      <BestSellers />
      <TrustBar />
      <Story />
      <Footer />
      <Drawer />
    </div>
  )
}
