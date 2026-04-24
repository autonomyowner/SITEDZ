import { useEffect } from 'react'
import { Hero, LogoMarquee, Services, Process, Pricing, Projects, CTA } from '../components/sections_ar.jsx'

export default function HomeAr() {
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('lang', 'ar')
    return () => {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }, [])

  return (
    <>
      <Hero headline="رؤيتك، برمجتنا." brush grain />
      <LogoMarquee />
      <Services />
      <Process />
      <Pricing />
      <Projects />
      <CTA />
    </>
  )
}
