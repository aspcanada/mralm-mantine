import Features from '../components/sections/features'
import Hero3 from '../components/sections/Hero3'
import Hero2 from '../components/sections/Hero2'
import Layout from '../components/layout'
import WaitlistHero from '../components/sections/waitlist-hero'

export default function HomePage() {
  return (
    <Layout>
      <Hero2 />
      {/* <Hero3 /> */}
      <Features />
      {/* <InvestmentOps /> */}
      <WaitlistHero />
    </Layout>
  )
}
