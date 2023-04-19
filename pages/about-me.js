import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/blog/container'
import Link from 'next/link'

export default function WhatIsItPage() {
  return (
    <Layout>
      <Head>
        <title>About Me | Mr Arms Length Mortgage</title>
        <meta
          name="description"
          content="Hi there, my name is Alain St. Pierre, founder of Mr. Arm’s Length Mortgage and ASP Canada Real Estate Group.  My passion is to teach…"
        ></meta>
      </Head>
      <Container>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900">About Me</h1>

        <p className="mt-4">
          Hi there, my name is Alain St. Pierre, founder of Mr. Arm’s Length
          Mortgage and ASP Canada Real Estate Group. My passion is to teach
          Canadians how to invest in mortgages using their RRSP’s (and other
          registered accounts). I’ve become the defacto “Arm’s Length Mortgage”
          guy, as Ranked #1 on Google and I receive 500+ hits per month on my
          blog.
        </p>
        <p className="mt-4">
          I have experience in putting together RRSP mortgages and other
          creative financing strategies. I currently own 5 doors across Western
          Canada and continue to add to my personal real estate portfolio.
        </p>
        <p className="mt-4">
          My passion in Real Estate Investing started when I bought my first
          property in 2007 and refinanced it two years later to pay off my
          student loans and bought out my JV partner. I still own the house and
          while I have no money into it, I continue to see it put money in my
          pocket! After seeing the potential to make money in Real Estate, I
          decided to educate myself. I’ve attended Real Estate Investing
          courses, read books and joined investment clubs and met a lot of great
          people along the way. I am a REIN Member and find myself expanding my
          context each and every day!
        </p>
        <p className="mt-4">
          If you have any questions or comments, please don’t hesitate to
          contact me directly. I look forward to speaking with you!
        </p>
        <p className="mt-4"></p>
        <p className="mt-4"></p>
        <p className="mt-4"></p>
      </Container>
    </Layout>
  )
}
