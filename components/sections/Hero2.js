import WaitlistButton from '../waitlist-button'

export default function Hero2() {
  return (
    <>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-700 mix-blend-multiply" />
            </div>
            <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Take control of your</span>
                <span className="block text-sky-200">financial success</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-sky-200 sm:max-w-3xl">
                Imagine the impact of bringing together real estate
                entrepreneurs, investment opportunities, and private lenders in
                a single platform.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <WaitlistButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
