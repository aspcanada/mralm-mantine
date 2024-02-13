import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/blog/container'
import Link from 'next/link'
import Banner from '../components/sections/Banner'
import WaitlistHero from '../components/sections/waitlist-hero'

export default function AboutMePage() {
  return (
    <Layout>
      <Head>
        <title>About Me | Mr Arms Length Mortgage</title>
        <meta
          name="description"
          content="Hi there, my name is Alain St. Pierre, founder of Mr. Arm's Length Mortgage and St Avant Capital Corp.  My passion is to teach…"
        ></meta>
      </Head>
      <Container>
        <Banner
          title={'About Me'}
          description={
            'Founder of Mr. Arm’s Length Mortgage and St Avant Capital Corp.'
          }
          image={'/assets/cover-aboutme.jpeg'}
          imageAlt={'About Me'}
        />

        <h1 className="mt-8 text-2xl font-semibold">
          My Journey: From Code to Capital
        </h1>
        <p className="mt-4">
          Welcome to my corner of the web, where finance meets freedom, and
          where I share my journey from a remote software engineer to a
          passionate investor and financial educator.
        </p>

        <h1 className="mt-8 text-xl font-semibold">Who I Am</h1>
        <p className="mt-4">
          I&apos;m Alain St. Pierre, a former senior software engineer with 28
          years of experience working remotely in the tech industry. My career
          was fulfilling, rich in challenges, and rewarding in accomplishments.
          However, despite the success, I felt a void—a lack of real, human
          connection and a desire to make a tangible difference in people&apos;s
          lives.
        </p>
        <p className="mt-4">
          Driven by a passion for personal finance and a yearning for more
          meaningful interactions, I embarked on a new path. I sold most of my
          real estate portfolio at the peak of the market in 2022 and delved
          into the world of private lending on land development and mortgages.
          This transition wasn&apos;t just about financial growth; it was about
          pursuing a life filled with purpose, flexibility, and the ability to
          spend more time with my family.
        </p>

        <h1 className="mt-8 text-xl font-semibold">My Mission</h1>
        <p className="mt-4">
          As I navigated the complexities of the private capital markets, I
          realized the immense value and potential that lay in educating others
          about these opportunities. My mission became clear: to help others
          achieve financial freedom and escape the rat race. With this goal in
          mind, I took the Exempt Market Proficiency course, further solidifying
          my expertise in the field.
        </p>
        <p className="mt-4">
          I&apos;m in the process of becoming a Private Wealth Advisor for
          Raintree Financial Solutions. My focus is on demystifying the private
          exempt market and showing investors how to diversify their portfolios
          effectively, offering alternatives to traditional investment routes.
        </p>
        <h1 className="mt-8 text-xl font-semibold">Why I Do What I Do</h1>
        <p className="mt-4">
          My journey from coding at a desk to engaging with real people about
          their financial futures has been incredibly rewarding. I believe in
          the power of alternative investments and the importance of financial
          education. Through my blog, consulting, and speaking engagements, I
          aim to empower individuals with the knowledge and tools they need to
          make informed investment decisions.
        </p>
        <h1 className="mt-8 text-xl font-semibold">Let&apos;s Connect</h1>
        <p className="mt-4">
          Whether you&apos;re seeking to diversify your investment portfolio,
          explore the possibilities of private capital markets, or simply
          looking for a guide to navigate the world of finance, I&apos;m here to
          help. My journey has taught me the importance of taking control of
          one&apos;s financial future, and I&apos;m passionate about helping
          others do the same.
        </p>
        <p className="mt-4">
          Join me in exploring the potential of your financial future. Together,
          we can turn your financial goals into reality.
        </p>
        <p className="mt-4"></p>
        <p className="mt-4"></p>
        <p className="mt-4"></p>
      </Container>
      <WaitlistHero />
    </Layout>
  )
}
