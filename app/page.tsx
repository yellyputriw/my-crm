'use client'

import Image from 'next/image'

import ApprovalBank from '@/app/components/Chart/ApprovalBank'
import ApprovedLoan from '@/app/components/Chart/ApprovedLoan'
import Target from '@/app/components/Chart/Target'
import MainLayout from '@/app/components/MainLayout'
import { dashboardCardData } from '@/app/utils/dashboard-card'
import AvatarImage from '@/assets/avatar.png'
import EditIcon from '@/assets/icons/Edit.svg'
import BuildingIcon from '@/assets/icons/profile/building.svg'
import IdIcon from '@/assets/icons/profile/id.svg'
import MessageIcon from '@/assets/icons/profile/message.svg'
import PhoneIcon from '@/assets/icons/profile/phone.svg'

export default function Home() {
  return (
    <MainLayout pageTitle="Dashboard">
      <div className="mb-[53px] flex w-full flex-col gap-10 border-b border-b-[#C1C1C1] bg-white px-12 pb-10 pt-12 lg:flex-row">
        <Image src={AvatarImage} alt="" />
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-semibold text-[#17A9E2]">YOHANNES AFFANDY (JOJO)</h3>
          <div className="flex flex-col gap-3.5 md:flex-row md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <Image src={BuildingIcon} alt="" />
                <p className="text-xl font-medium">Loan Market Office Dev</p>
              </div>
              <div className="flex items-center gap-3.5">
                <Image src={IdIcon} alt="" />
                <p className="text-xl font-medium">LM9990001</p>
              </div>
            </div>
            <hr className="hidden h-[102px] w-[1px] bg-[#C1C1C1] md:block" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <Image src={MessageIcon} alt="" />
                <p className="text-xl font-medium">it@loanmarket.co.id</p>
              </div>
              <div className="flex items-center gap-3.5">
                <Image src={PhoneIcon} alt="" />
                <p className="text-xl font-medium">6281234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-6 px-9 lg:flex-row">
        <div className="flex w-full flex-col gap-6">
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardCardData.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-center justify-around gap-2 rounded-lg border border-[#D9D8D8] bg-white px-5 py-2.5 sm:flex-row"
              >
                <Image src={item.icon} alt="" width={56} />
                <div className="flex flex-col items-center gap-2">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <span className="text-3xl font-bold text-[#17A9E2]">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-evenly gap-4 border border-[#D9D8D8] bg-white px-5 py-5 lg:flex-row lg:items-start">
            <div className="flex flex-col items-center">
              <p className="mb-5 text-2xl font-semibold">PINJAMAN DISETUJUI</p>
              <ApprovedLoan />
              <p className="mt-5 text-center text-sm font-semibold">2/5 Pinjaman telah disetujui</p>
            </div>
            <hr className="h-[1px] w-[355px] bg-[#c1c1c1] lg:h-[355px] lg:w-[1px]" />
            <div>
              <div className="relative flex justify-center">
                <p className="mb-5 text-2xl font-semibold">TARGET</p>
                <button className="absolute -right-6 top-0 md:-right-14">
                  <Image src={EditIcon} alt="" />
                </button>
              </div>
              <Target />
              <p className="mt-5 text-center text-sm font-semibold">
                Rp14.000.000.000,00 / Rp5.000.000.000
              </p>
            </div>
          </div>
          <div className="mb-5 flex flex-col items-center border border-[#D9D8D8] bg-white py-5">
            <h6 className="mb-10 text-center text-2xl font-semibold">
              Top 5 Bank Approval Tertinggi
            </h6>
            <ApprovalBank />
          </div>
        </div>
        <div className="w-full border border-[#D9D8D8] bg-white px-[33px] py-[29px] lg:w-[400px]">
          <h6 className="text-lg font-semibold">Notification</h6>
          <div className="mt-8 flex gap-8">
            <ol className="relative">
              <li className="mb-[6.25rem]">
                <p className="text-sm">2hrs</p>
              </li>
              <li className="mb-[6.25rem]">
                <p className="text-sm">2hrs</p>
              </li>
              <li className="mb-[6.25rem]">
                <p className="text-sm">2hrs</p>
              </li>
              <li className="">
                <p className="text-sm">2hrs</p>
              </li>
            </ol>
            <ol className="relative border-s-4 border-[#646567] border-opacity-30 text-gray-500">
              <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#17A9E2]"></span>
                <h6 className="font-semibold leading-tight text-black">admin_branch has updated</h6>
                <p className="text-sm text-[#646567]">Harry Handoko - Contact | MYCRM</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#646567]"></span>
                <h6 className="font-semibold leading-tight text-black">admin_branch has updated</h6>
                <p className="text-sm text-[#646567]">Harry Handoko - Contact | MYCRM</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#17A9E2]"></span>
                <h6 className="font-semibold leading-tight text-black">admin_branch has updated</h6>
                <p className="text-sm text-[#646567]">Harry Handoko - Contact | MYCRM</p>
              </li>
              <li className="ms-6">
                <span className="absolute -start-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#646567]"></span>
                <h6 className="font-semibold leading-tight text-black">admin_branch has updated</h6>
                <p className="text-sm text-[#646567]">Harry Handoko - Contact | MYCRM</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
