import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion:reduce)').matches

// Curtain intro -> hero entrance (one orchestrated timeline).
export default function useIntro(scope, lenisRef, onDone) {
  useGSAP(
    () => {
      const finish = () => {
        onDone()
        lenisRef.current?.start()
      }
      const tl = gsap.timeline({ onComplete: finish })

      if (prefersReducedMotion()) {
        tl.set('#intro', { autoAlpha: 0 }).set('.h', { opacity: 1 })
        return
      }
      tl.from('#il', { opacity: 0, scale: 0.92, duration: 0.9, ease: 'power2.out' })
        .addLabel('open', '+=1.1')
        .to('#il', { opacity: 0, duration: 0.5 }, 'open')
        .to('.cl', { xPercent: -100, duration: 1.3, ease: 'power3.inOut' }, 'open')
        .to('.cr', { xPercent: 100, duration: 1.3, ease: 'power3.inOut' }, 'open')
        .from('.hb', { scale: 1.3, duration: 2.2, ease: 'power2.out' }, 'open')
        .from('nav', { yPercent: -100, opacity: 0, duration: 0.9, ease: 'power3.out' }, 'open+=.9')
        .from('.h', { y: 40, opacity: 0, stagger: 0.16, duration: 1, ease: 'power3.out' }, 'open+=.8')
    },
    { scope }
  )
}
