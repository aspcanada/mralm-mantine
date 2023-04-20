import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/blog/container'
import Link from 'next/link'
import Banner from '../../components/sections/Banner'
import WaitlistHero from '../../components/sections/waitlist-hero'

export default function WhosInvolvedPage() {
  return (
    <Layout>
      <Head>
        <title>Who’s All Involved? | Mr Arms Length Mortgage</title>
        <meta
          name="description"
          content="What are the ‘roles’ of the main three parties involved? There are several players in a transaction like this, each with various duties and…"
        ></meta>
      </Head>
      <Container>
        <Banner
          title={'Who’s All Involved?'}
          description={
            'What are the ‘roles’ of the main three parties involved?'
          }
          image={'/assets/cover-arms.jpg'}
          imageAlt={'Who’s All Involved?'}
        />
        <p className="mt-4">
          There are several players in a transaction like this, each with
          various duties and responsibilities to play. They are basically as
          follows (but not limited to):
        </p>
        <div className="mt-4 ml-5 rounded-lg bg-sky-100 dark:bg-sky-900 px-4 py-3 shadow">
          <h3 className="font-semibold">
            Real Estate Investor / Entrepreneur and team:
          </h3>
          <p className="mt-2">
            They find the deals and they construct the deals to buy with cash
            and mortgage funding (first and second mortgages). As the engineer
            of the deal, they must make sure that the other parties have ALL the
            information on every aspect of the deal that would be required for
            them to make sound, informed, and intelligent decisions. Typically,
            they set up the details of the mortgage with respect to term,
            interest rate, and payment schedules, for the RRSP planholder
            investor (that’s you) to consider, and then mutually agree to.
          </p>
        </div>

        <div className="mt-4 ml-5 rounded-lg bg-sky-100 dark:bg-sky-900 px-4 py-3 shadow">
          <h3 className="font-semibold">
            RRSP/Planholder Investor and advisors (that’s YOU):
          </h3>
          <p className="mt-2">
            Typically, this is a person disgruntled with the status quo mutual
            funds and stock-based funds for RRSP investing, and their lack of
            performance. They want to take control of their RRSP portfolio, and
            in order to do that well, they will educate themselves and take on
            the actions and responsibilities as the CEO of their retirement
            future. They will have some professional advisors in their corner
            for advice and consultation in handling their affairs.
          </p>
        </div>

        <div className="mt-4 ml-5 rounded-lg bg-sky-100 dark:bg-sky-900 px-4 py-3 shadow">
          <h3 className="font-semibold">Trustee:</h3>
          <p className="mt-2">
            The trustee is a financial institution (like Olympia Trust) that is
            set up as a stakeholder for the planholders of RRSP monies and their
            account. They accept the payments, monitor the regularity of them,
            and report to the planholder. They also co-ordinate, with the input
            and instruction of the planholder, the setting up of the account
            including any movement of funds being held with other institutions
            or brokerage houses.
          </p>
        </div>
        <p className="mt-4">
          Arm’s Length Mortgages are considered to be a sophisticated investor
          strategy.
        </p>
        <div>
          <p className="mt-4">If… you are a sophisticated investor… </p>
          <p className="mt-4">
            Or, if you would like to become a sophisticated investor…
          </p>
          <p className="mt-4">
            Or, if you are not satisfied with the returns you are getting on
            your RRSP, RRIF or LIRA account…
          </p>
        </div>
        <p className="mt-4">
          Then, I suggest you consider using the funds available in any one of
          the above accounts for one or more Arm’s Length Mortgage(s).
        </p>

        <div className="mt-4 text-center">
          <Link
            href="/what-is-it/misconceptions"
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-sky-600 border border-transparent rounded-md active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-sky"
          >
            Common Misconceptions &rarr;
          </Link>
        </div>
      </Container>
      <WaitlistHero />
    </Layout>
  )
}
