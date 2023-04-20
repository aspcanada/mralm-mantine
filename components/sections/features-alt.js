import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
  BanknotesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function FeaturesAltSection() {
  return (
    <>
      {/* Alternating Feature Sections */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        />

        {/* Feature - Investment Opportunities */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-600">
                    <BanknotesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Investment Opportunities
                  </h2>
                  <p className="mt-4 text-lg">
                    Access to a diverse range of real estate investment
                    opportunities, including residential and commercial
                    properties.
                  </p>
                  <div className="mt-6">{/* <WaitlistButton /> */}</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base">
                      &ldquo;I really like the idea of InvestDirect. I can see
                      it helping investors connect with each other and explore
                      opportunities&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="text-base font-medium">
                        L Hill, Real Estate Investor
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            {/* Screenshot - Deals */}
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  // src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  src="/assets/screenshots/deals.png"
                  alt="Deals user interface"
                  width={948}
                  height={571}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature - Member Network */}
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-600">
                    <UserGroupIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Network of Investors
                  </h2>
                  <p className="mt-4 text-lg">
                    Connect with private investors from all around Canada and
                    expand your funding options.
                  </p>
                  <div className="mt-6">{/* <WaitlistButton /> */}</div>
                </div>
              </div>
            </div>
            {/* Screenshot - Members */}
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  // src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  src="/assets/screenshots/members.png"
                  alt="Members user interface"
                  width={948}
                  height={571}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
