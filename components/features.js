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
    name: 'Network of Lenders',
    description:
      'Connect with private lenders from all around Canada and expand your funding options.',
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
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-600">
              Revolutionizing the Industry
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Connecting Borrowers and Lenders for Greater Choice and Lower
              Rates
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our community is revolutionizing the industry by connecting
              borrowers with a network of lenders, providing greater choice and
              lower rates.
            </p>
          </div>
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
        </div>
      </div>
    </>
  )
}
