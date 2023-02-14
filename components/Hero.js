export default function Hero() {
  return (
    <>
      {/* <div className="relative px-6 lg:px-8"> */}
      <div className="mx-auto max-w-2xl py-24 sm:py-12 lg:py-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our new platform.{' '}
            <a href="#" className="font-semibold text-sky-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Join the wait list <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Empowering Investors, Changing Lives
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Imagine the impact of bringing together real estate entrepreneurs,
            investment opportunities, and private lenders in a single platform.
            With our innovative peer-to-peer network and comprehensive
            educational resources, you have the power to not only grow your
            wealth but also make a positive impact by supporting the growth and
            success of others.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-sky-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
