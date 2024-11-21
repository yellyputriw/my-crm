'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import BankIcon from '@/assets/icons/Bank Building.png'
import ContactIcon from '@/assets/icons/Contact.png'
import FaQIcon from '@/assets/icons/Help.png'
import HomeIcon from '@/assets/icons/Home.png'
import HomeDarkIcon from '@/assets/icons/HomeDark.png'
import PipelineIcon from '@/assets/icons/Layers.png'
import CreditScoreIcon from '@/assets/icons/Performance.png'
import ProductIcon from '@/assets/icons/Shopping Bag.png'
import Logo from '@/assets/logo.png'
import { usePathname } from 'next/navigation'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false) // state to handle sidebar toggle
  const pathname = usePathname()

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="absolute lg:relative lg:top-0 lg:flex">
      {/* Hamburger Button */}
      <button onClick={toggleSidebar} className="p-4 lg:hidden">
        <div className="mb-2 h-1 w-6 bg-black"></div>
        <div className="mb-2 h-1 w-6 bg-black"></div>
        <div className="h-1 w-6 bg-black"></div>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full transform bg-white shadow-custom-shadow transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-[270px] lg:translate-x-0`}
      >
        <div className="flex w-full flex-col items-center gap-[52px]">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute right-4 top-4 text-xl text-gray-700 lg:hidden"
          >
            X
          </button>

          <Image src={Logo} alt="Loan Market" />
          <ul className="flex h-full w-full flex-col items-center">
            <li className="mb-[15px] w-full px-2.5">
              <Link
                href="/"
                className={`${pathname === '/' ? 'bg-[#17A9E2]' : 'bg-white'} flex w-full items-center justify-start gap-4 rounded-[10px] p-3`}
              >
                {pathname === '/' ? (
                  <Image src={HomeIcon} alt="Home Icon" />
                ) : (
                  <Image src={HomeDarkIcon} alt="Home Icon" />
                )}
                <span
                  className={`${pathname === '/' ? 'text-white' : 'text-[#646567]'} text-xl font-medium`}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            {/* Other links remain unchanged */}
            <li className="mb-[15px] w-full px-2.5">
              <Link
                href="/"
                className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
              >
                <Image src={ContactIcon} alt="Contact Icon" />
                <span className="text-xl font-medium text-[#646567]">Contact</span>
              </Link>
            </li>
            {/* Product Disclosure */}
            <li className="mb-[15px] w-full">
              <Disclosure as="div" className="w-full rounded-[10px] px-2.5" defaultOpen={true}>
                <DisclosureButton className="group mb-[15px] flex w-full items-center justify-between p-3">
                  <div className="flex items-center justify-start gap-4">
                    <Image src={ProductIcon} alt="Product Icon" />
                    <span className="text-xl font-medium text-[#646567]">Product</span>
                  </div>
                  <FaChevronDown className="w-[30px] group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel>
                  <Link
                    href="/"
                    className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
                  >
                    <div className="h-[35px] w-[35px] bg-transparent"></div>
                    <span className="text-xl font-medium text-[#646567]">Bank Product</span>
                  </Link>
                  <Link
                    href="/"
                    className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
                  >
                    <div className="h-[35px] w-[35px] bg-transparent"></div>
                    <span className="text-xl font-medium text-[#646567]">Product</span>
                  </Link>
                  <Link
                    href="/"
                    className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
                  >
                    <div className="h-[35px] w-[35px] bg-transparent"></div>
                    <span className="text-xl font-medium text-[#646567]">Category Product</span>
                  </Link>
                </DisclosurePanel>
              </Disclosure>
            </li>
            {/* Other Links */}
            <li className="mb-[15px] w-full px-2.5">
              <Link
                href="/"
                className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
              >
                <Image src={BankIcon} alt="Bank Icon" />
                <span className="text-xl font-medium text-[#646567]">Bank</span>
              </Link>
            </li>
            <li className="mb-[15px] w-full px-2.5">
              <Link
                href="/"
                className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
              >
                <Image src={CreditScoreIcon} alt="Credit Score Icon" />
                <span className="text-xl font-medium text-[#646567]">Credit Scoring</span>
              </Link>
            </li>
            {/* Other Links */}
            <li className="mb-[15px] w-full px-2.5">
              <Link
                href="/"
                className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
              >
                <Image src={FaQIcon} alt="FaQ Icon" />
                <span className="text-xl font-medium text-[#646567]">FAQ’s</span>
              </Link>
            </li>
            <li className="mb-[15px] w-full px-2.5">
              <Link
                href="/"
                className="flex w-full items-center justify-start gap-4 rounded-[10px] p-3"
              >
                <Image src={PipelineIcon} alt="Pipeline Icon" />
                <span className="text-xl font-medium text-[#646567]">Pipeline</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default SideBar
