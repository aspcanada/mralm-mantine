import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import Link from 'next/link'
import WaitlistButton from '../waitlist-button'

const navigation = [
  { name: 'What Is It?', href: '/what-is-it' },
  {
    name: 'Benefits',
    href: '/what-is-it/benefits-features-in-an-arms-length-mortgage',
  },
  { name: 'Blog', href: '/blog' },
  // { name: 'Marketplace', href: '#' },
  { name: 'About', href: '/about-me' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // open tawk.to chat widget
  const openChat = () => {
    window.Tawk_API.toggle()
  }

  return (
    <div className="isolate mx-auto max-w-7xl px-6 lg:px-8">
      <nav
        className="flex items-center justify-between border-b-2 border-gray-100 py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">MrALM</span>
            <Image priority src={Logo} alt="" width={32} height={32} />
          </Link>
          <Link href="/">
            <span className="text-2xl font-thin p-1">MrALM</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {menu.name}
            </Link>
          ))}
          <button
            onClick={openChat}
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end">
          {/* <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700"
          >
            Sign up
          </a> */}
          <WaitlistButton />
        </div>
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MrALM</span>
                <Image src={Logo} alt="" width={32} height={32} />
              </Link>
              <Link href="/">
                <span className="text-2xl font-thin p-1">MrALM</span>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <WaitlistButton />
              {/* <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                  Join the Waitlist
                </Link>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
