import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from './useIntro'

gsap.registerPlugin(ScrollTrigger)

// Hero parallax, section blur cross-fade, staggered reveals, image parallax.
export default function useScrollAnimations(scope) {
  useGSAP(
    () => {
      const root = scope.current

      gsap.to('.hb', {
        yPercent: 4,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      })

      if (prefersReducedMotion()) return

      gsap.utils.toArray('.sec', root).forEach((s) =>
        gsap.fromTo(
          s,
          { opacity: 0.15, filter: 'blur(10px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'none',
            scrollTrigger: { trigger: s, start: 'top 92%', end: 'top 50%', scrub: true }
          }
        )
      )

      gsap.set('.rv', { opacity: 0, y: 50 })
      ScrollTrigger.batch('.rv', {
        start: 'top 90%',
        once: true,
        onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, stagger: 0.14, duration: 1.1, ease: 'power3.out' })
      })

      gsap.from('.arch', {
        y: 150,
        opacity: 0,
        stagger: 0.22,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.arches', start: 'top 80%' }
      })

      gsap.utils.toArray('.arch .im, .xc .im, .pc .im', root).forEach((im) =>
        gsap.fromTo(
          im,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
          }
        )
      )
    },
    { scope }
  )
}
