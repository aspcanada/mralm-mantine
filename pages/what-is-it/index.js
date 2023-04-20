import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/blog/container'
import Link from 'next/link'
import Banner from '../../components/sections/Banner'
import WaitlistHero from '../../components/sections/waitlist-hero'

export default function WhatIsItPage() {
  return (
    <Layout>
      <Head>
        <title>
          What is an Arm’s Length Mortgage? | Mr Arms Length Mortgage
        </title>
        <meta
          name="description"
          content="What is an Arm’s Length Mortgage? An “Arm’s Length Mortgage” refers to a mortgage that is held within an individual’s registered retirement…"
        ></meta>
      </Head>
      <Container>
        <Banner
          title={'What is an Arm’s Length Mortgage?'}
          description={
            'An “Arm’s Length Mortgage” refers to a mortgage that is held within an individual’s registered retirement investment account (RRSP).'
          }
          image={'/assets/cover-what-is-it.jpg'}
          imageAlt={'What is an Arm’s Length Mortgage?'}
        />

        <p className="mt-4">
          Many of you know that you can use your RRSP money with the Home
          Buyer’s Plan to buy your first home. Many of you have done that
          already. Smart move!
        </p>
        <p className="mt-4">
          What the vast majority of you (and most real estate investors) don’t
          know is that you can use your RRSP money (and other types of
          registered investment accounts) to invest in{' '}
          <strong>OTHER people’s real estate</strong>. And when I say “the vast
          majority”, I mean it! Most financial institutions can arrange
          Non-Arm’s Length Mortgage, where you use your own RRSP money to fund
          your own, or a related family member’s property. But there are only a
          few institutions in Canada that will allow you to fund someone else’s
          real estate purchase. One of these institutions is Olympia Trust.
        </p>
        <p className="mt-4">
          Arm’s Length Mortgages are very popular in Western Canada. With the
          help of these Trustees (Olympia Trust, Canadian Western Trust, B2B
          Trust), I plan to further educate investors on this little known, and
          highly successful investment gem!
        </p>
        <p className="mt-4">
          To summarize for you, there are three different ways to use RRSP money
          to invest in real estate:
        </p>
        <div className="mt-4 ml-5 rounded-lg bg-sky-100 dark:bg-sky-900 px-4 py-3 shadow">
          <h3 className="font-semibold ">Home Buyer’s Plan</h3>
          <p className="mt-2">
            You borrow from your own RRSP to buy your first home (withdrawals
            must be repaid within 15 years).
          </p>
        </div>
        <div className="mt-4 ml-5 rounded-lg bg-sky-100 dark:bg-sky-900 px-4 py-3 shadow">
          <h3 className="font-semibold ">Non-Arm’s Length Mortgage</h3>
          <p className="mt-2">
            You (as an investor looking to buy real estate property which is NOT
            your first home) borrow from your own RRSP or that of a family
            member. The money is borrowed in the form of a 1st mortgage only (on
            residential or commercial property), is fully insured by CMHC, and
            you must qualify as with a normal mortgage. The mortgage repayment
            terms are not flexible and must follow typical bank industry
            standards.
          </p>
        </div>
        <div className="mt-4 ml-5 rounded-lg bg-sky-100 dark:bg-sky-900 px-4 py-3 shadow">
          <h3 className="font-semibold ">
            Arm’s Length Mortgage (this is the one this article focuses on)
          </h3>
          <p className="mt-2">
            You invest your RRSP money into someone else’s real estate. It can
            be in the form of a 1st, 2nd or 3rd mortgage; on residential,
            commercial, industrial properties, vacant land or recreational
            property. The big difference between this method and #2 is that the
            “someone” can NOT be related to you—as defined by section 251 of the
            Income Tax Act. In short, that means your spouse, family, or
            in-laws.
          </p>
        </div>
        <p className="mt-4">
          In a nutshell, you loan money out to a real estate investor who agrees
          to pay you interest on the money, and the real estate investor will
          pay back the loan at an agreed upon time down the road. As security
          for the loan, a mortgage is registered against the property so your
          RRSP monies are protected.
        </p>
        <p className="mt-4">
          An Arm’s Length Mortgage is the MOST flexible way to use RRSP money.
          It is a sophisticated investor strategy that I plan on using for years
          to come for expanding my real estate portfolio and that of my
          investors.
        </p>

        <div className="mt-4 text-center">
          <Link
            href="/what-is-it/benefits-features-in-an-arms-length-mortgage"
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-sky-600 border border-transparent rounded-md active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-sky"
          >
            Learn More about the Benefits &amp; Features &rarr;
          </Link>
        </div>
      </Container>
      <WaitlistHero />
    </Layout>
  )
}
