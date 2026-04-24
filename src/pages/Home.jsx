import { Hero, LogoMarquee, Services, Process, Pricing, Projects, CTA } from '../components/sections.jsx'

export default function Home() {
  return (
    <>
      <Hero headline="Your vision, our code." brush grain />
      <LogoMarquee />
      <Services />
      <Process />
      <Pricing />
      <Projects />
      <CTA />
    </>
  )
}
