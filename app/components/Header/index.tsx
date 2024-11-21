import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import { FaCaretDown } from 'react-icons/fa'

import NotificationIcon from '@/assets/icons/Notification.png'

interface IHeader {
  pageTitle: string
}
const Header = ({ pageTitle }: IHeader) => {
  return (
    <header className="flex w-full items-end border-b-2 border-b-[#C1C1C1] bg-white py-5 pl-4 md:items-center md:justify-between md:px-12">
      <h1 className="pl-10 text-2xl text-[#4F5051] md:pl-0 md:text-[45px]">{pageTitle}</h1>
      <div className="flex">
        <hr className="hidden h-[60px] w-[1px] bg-[#C1C1C1] md:block" />

        <Menu>
          <MenuButton className="mx-4 hidden items-center gap-3 text-[22px] font-semibold text-[#646567] shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white md:inline-flex">
            <Image src={NotificationIcon} alt="Notification icon" />
            <FaCaretDown />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-md border border-white bg-white p-1 text-sm/6 text-[#4F5051] shadow-md transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                Belum Ada Notifikasi
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
        <hr className="hidden h-[60px] w-[1px] bg-[#C1C1C1] md:block" />
        <Menu>
          <MenuButton className="mx-4 hidden items-center gap-6 text-base text-[#646567] shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white md:inline-flex md:text-[22px]">
            <span>YOHANNES AFFANDY</span>
            <FaCaretDown />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-md border border-white bg-white p-1 text-sm/6 text-[#4F5051] shadow-md transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
        <hr className="hidden h-[60px] w-[1px] bg-[#C1C1C1] md:block" />
      </div>
    </header>
  )
}

export default Header
