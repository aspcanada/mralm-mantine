import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/blog/container'
import Link from 'next/link'
import Banner from '../../components/sections/Banner'
import WaitlistHero from '../../components/sections/waitlist-hero'

export default function BenefitsPage() {
  return (
    <Layout>
      <Head>
        <title>Benefits & Features | Mr Arms Length Mortgage</title>
        <meta
          name="description"
          content="The BENEFITS for YOU, the INVESTOR An Arm’s Length Mortgage provides many excellent benefits for the person interested in turning their RRSP…"
        ></meta>
      </Head>
      <Container>
        <Banner
          title={'Benefits & Features'}
          description={
            'An Arm’s Length Mortgage provides many excellent benefits for the person interested in turning their RRSP money into one or more mortgages'
          }
          image={'/assets/cover-benefits.jpg'}
          imageAlt={'Benefits & Features'}
        />
        <h1 className="mt-4 text-2xl font-semibold">
          The BENEFITS for YOU, the INVESTOR
        </h1>
        <p className="mt-4">
          <ul className="mt-4 ml-5 list-disc">
            <li className="mt-2">
              <span className="font-bold">
                Offers a Consistent, Predictable Return on Investment
              </span>
              <br />
              Regardless of the fluctuations in the market and the status of the
              world economy, you know your investment will earn you X% of
              interest over Y number of months or years.
            </li>
            <li className="mt-2">
              <span className="font-bold">Simplified Retirement Planning</span>
              <br />
              You know precisely HOW MUCH money will be added to your RRSP
              account (unlike floating interest rates or dividends or sales from
              stocks) and WHEN money will be added to your RRSP account.
            </li>
            <li className="mt-2">
              <span className="font-bold">High Return</span>
              <br />
              You typically get a much higher return on investment than you
              currently receive with other investment vehicles. Pre-Defined
              Investment Terms You know precisely when your investment money is
              no longer being used for a mortgage and is returned to your
              account.
            </li>
            <li className="mt-2">
              <span className="font-bold">Full Control</span>
              <br /> You, the Investor, have full control over which mortgage
              you want to invest in (unlike mutual funds).
            </li>
            <li className="mt-2">
              <span className="font-bold">Secured by Real Estate</span>
              <br />
              Your investment is secured by REAL estate… unlike money invested
              paper assets like (Mutual Funds, GICs, Stocks, etc).
            </li>
            <li className="mt-2">
              <span className="font-bold">No Time Required </span>
              <br />
              After spending a bit of time to set up the process, you won’t need
              to spend time on this since the trustee, lawyer and borrower do
              ALL the work.
            </li>
            <li className="mt-2">
              <span className="font-bold">No Special Expertise Required </span>
              <br /> No expertise required on your part (the borrower uses a
              team of professionals: lawyer, realtor, accountant), and the
              trustee is well-experienced in this type of transaction.
            </li>
            <li className="mt-2">
              <span className="font-bold">
                Contribution Limits are NOT Affected
              </span>
              <br /> The repayments back into your RRSP do not affect your
              contribution limits for the year—the money is simply being
              returned to you—along with the interest.
            </li>
            <li className="mt-2">
              <span className="font-bold">Wash, Rinse and REPEAT</span>
              <br />
              Best of all, when the invested money is returned to your RRSP, you
              have full control over what you want to invest the money in
              again—either another mortgage, or conventional instruments such as
              GIC’s bonds, stock or mutual funds.
            </li>
          </ul>
        </p>

        <h1 className="mt-4 text-2xl font-semibold">
          The FEATURES for YOU, the INVESTOR
        </h1>
        <p className="mt-4">
          <ul className="mt-4 ml-5 list-disc">
            <li className="mt-2">
              This investment strategy is fully approved by the Canada Revenue
              Agency.
            </li>
            <li className="mt-2">
              There are no set-up fees for you, the lender (when over $25,000 is
              invested).
            </li>
            <li className="mt-2">
              The whole process takes place under the RRSP umbrella and profits
              remain tax sheltered.
            </li>
            <li className="mt-2">
              You, the Investor, do not pay tax on the interest you receive
              because interest is accrued inside of your registered account.
            </li>
            <li className="mt-2">
              This process is supervised and administered by a trust company: TD
              Waterhouse Olympia Trust (acts as the trustee).
            </li>
            <li className="mt-2">
              FYI, the certified cheque to purchase a property (using your RRSP
              money) goes to the trustee first, then to the real estate
              investor’s lawyer, then to the seller of the property. The
              mortgage payments are made through the trustee, directly into YOUR
              RRSP account, pulling the money directly from the real estate
              investor’s bank account—you don’t have to collect the payments
              yourself, this is all arranged for you.
            </li>
            <li className="mt-2">
              To protect your privacy, the trustee’s name appears on the title
              of the property as the mortgage holder.
            </li>
            <li className="mt-2">
              The trustee sends you, the account holder (the Investor), a
              printed monthly statement (TD Waterhouse Olympia Trust), as well
              as access to an online statement.
            </li>
            <li className="mt-2">
              All the documentation is prepared by a reputable law firm.
            </li>
            <li className="mt-2">
              The terms of the mortgage can be very flexible. You (as the
              Investor) act as the ‘bank’ and as long as YOU are happy with the
              repayment arrangements that’s all that matters—there’s no 3rd
              party who will approve or disapprove the deal. It’s all up to you
              — YOU decide how, when and to whom you want to lend your money.
              YOU ARE IN COMPLETE CONTROL!
            </li>
          </ul>
        </p>

        <div className="mt-4 text-center">
          <Link
            href="/what-is-it/whos-all-involved"
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-sky-600 border border-transparent rounded-md active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-sky"
          >
            Who&apos;s All Involved? &rarr;
          </Link>
        </div>
      </Container>
      <WaitlistHero />
    </Layout>
  )
}
