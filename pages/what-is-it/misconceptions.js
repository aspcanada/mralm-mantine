import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/blog/container'
import Link from 'next/link'
import Banner from '../../components/sections/Banner'
import WaitlistHero from '../../components/sections/waitlist-hero'

export default function MisconceptionsPage() {
  return (
    <Layout>
      <Head>
        <title>Misconception | Mr Arms Length Mortgage</title>
        <meta
          name="description"
          content="Important Clarification Here is one misconception we encounter often: people think their money is leaving their RRSP and/or they think they…"
        ></meta>
      </Head>
      <Container>
        <Banner
          title={'Misconception'}
          description={
            'People think their money is leaving their RRSP or they think they are actually loaning the money so the borrower can buy a property'
          }
          image={'/assets/cover-misconception.jpg'}
          imageAlt={'Misconception'}
        />
        <h1 className="mt-4 text-2xl font-semibold">Important Clarification</h1>
        <p className="mt-4">
          Here is one misconception we encounter often: people think their money
          is leaving their RRSP and/or they think they are actually loaning the
          money so the borrower can buy a property. That’s not the case.
        </p>

        <p className="mt-4">
          Here’s the best analogy I can give you. Visualize your RRSP program as
          a house. For years, you’ve been adding money to a “duffel bag” that’s
          stored in your living room where it “rests” — I can’t think of a
          better term for money that’s earning such small returns.
        </p>
        <div>
          <p className="mt-4">
            When you decide to invest in a private mortgage, the trustee (ie:
            Olympia Trust) takes your duffle bag of money from the living room
            to the exercise room downstairs, where your money will work much
            harder for a while.
          </p>
          <p className="mt-4">
            After the borrower buys, fixes and sells (or refinances) the
            property, the mortgage is no longer needed and the trustee takes
            your duffle bag of money back to the living room — until it’s time
            for another deal when the money goes back to work hard. This process
            can be repeated many times so that your money will work hard for
            you.
          </p>
          <p className="mt-4">
            Now, the two important things to realize through this analogy are
            that:
          </p>
          <ol className="ml-10 list-decimal">
            <li className="mt-2">
              Your money NEVER leaves the RRSP “house”, never leaves your
              control, the borrower doesn’t see it, touch it, or handle it in
              any way, and
            </li>
            <li className="mt-2">
              the trustee is the key element in the transaction as far as you’re
              concerned, not the borrower. The trustee is working for YOU,
              because you are the trustee’s client, so they will take very good
              care of your money.
            </li>
          </ol>
        </div>
        <p className="mt-4">
          I hope this helps you understand this important misconception.
        </p>

        <div className="mt-4 text-center">
          <Link
            href="/what-is-it/am-i-qualified"
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-sky-600 border border-transparent rounded-md active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-sky"
          >
            Find out if you qualify &rarr;
          </Link>
        </div>
      </Container>
      <WaitlistHero />
    </Layout>
  )
}
