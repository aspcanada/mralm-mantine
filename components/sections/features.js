import {
  LightBulbIcon,
  UserGroupIcon,
  BanknotesIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Investment Opportunities',
    description:
      'Access to a diverse range of real estate investment opportunities, including residential and commercial properties.',
    icon: BanknotesIcon,
  },
  {
    name: 'Network of Investors',
    description:
      'Connect with private investors from all around Canada and expand your funding options.',
    icon: UserGroupIcon,
  },
  {
    name: 'Innovative Platform',
    description:
      'Utilize a user-friendly and secure platform to manage your investments and track performance.',
    icon: LightBulbIcon,
  },
  {
    name: 'Searchable Database',
    description:
      'Quickly and easily search through a vast database of investment properties to find the perfect opportunity to suit your needs and goals.',
    icon: MagnifyingGlassIcon,
  },
]

export default function Features() {
  return (
    <>
      {/* <div className="bg-white py-24 sm:py-12"> */}
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}

      {/* Announcing... */}
      {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our new platform.{' '}
              <a href="#" className="font-semibold text-sky-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Join the wait list <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}

      {/* Hero */}
      {/* <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Investors, Changing Lives
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Imagine the impact of bringing together real estate entrepreneurs,
              investment opportunities, and private investors in a single
              platform. With our innovative peer-to-peer network and
              comprehensive educational resources, you have the power to not
              only grow your wealth but also make a positive impact by
              supporting the growth and success of others.
            </p>
          </div> */}

      {/* Features */}
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}
