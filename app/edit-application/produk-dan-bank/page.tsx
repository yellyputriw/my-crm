import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FiSave, FiSearch } from 'react-icons/fi'
import { LiaSortAlphaDownSolid } from 'react-icons/lia'

import MainLayout from '@/app/components/MainLayout'
import Rating from '@/app/components/Rating'
import { bankList } from '@/app/utils/bank-list'
import HelpIcon from '@/assets/icons/help.svg'

const EditApplication = () => {
  return (
    <MainLayout pageTitle="Edit Application">
      <div className="hidden h-[150px] w-full gap-10 border-b border-b-[#C1C1C1] bg-white px-10 pb-10 pt-6 md:flex">
        <ol className="flex h-fit w-full items-center justify-center">
          {stepperData?.map((step, index) => (
            <li
              key={index}
              className={`${stepperData.length - 1 === index ? 'after:hidden' : 'after:inline-block'} ${step.isActive || step.isPending ? 'after:border-[#6465674D]' : 'after:border-[#005274]'} flex items-center after:h-1 after:w-[5vw] after:border-4 after:border-b after:content-['']`}
            >
              <div
                className={`${step.isActive ? 'bg-[#17A9E2]' : step.isPending ? 'bg-[#6465674D]' : 'bg-[#005274]'} relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full`}
              >
                <p
                  className={`${step.isActive ? 'text-[#17A9E2]' : step.isPending ? 'text-[#6465674D]' : 'text-[#005274]'} absolute top-8 font-semibold`}
                >
                  {step.title}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mx-4 flex items-center justify-between py-7">
        <button className="rounded-full bg-[#17A9E2] p-2 text-white">
          <FaArrowLeft className="h-[45px] w-[45px]" />
        </button>
        <div className="text-center">
          <h3 className="mb-2 text-3xl font-semibold">Pilihan Produk & Bank</h3>
          <p className="text-xl text-[#646567]">Silahkan pilih produk bank yang sesuai</p>
        </div>
        <button className="rounded-full bg-[#17A9E2] p-2 text-white">
          <FaArrowRight className="h-[45px] w-[45px]" />
        </button>
      </div>
      <div className="mx-4 mb-9 rounded-2xl bg-white px-8 py-6 shadow-custom-shadow">
        <div className="mb-9 flex w-full flex-col items-center gap-10 sm:flex-row">
          <form className="mx-auto w-full">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-[15px] border border-[#C1C1C1] bg-white px-4 py-2.5 ps-9 text-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Cari Nama Bank"
                required
              />
              <button
                type="submit"
                className="absolute bottom-1.5 end-2.5 px-4 py-2 text-xl font-medium text-[#1CABE6] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <FiSearch />
              </button>
            </div>
          </form>
          <button className="flex items-center justify-between gap-4 rounded-[15px] border border-[#C1C1C1] px-4 py-2.5">
            <LiaSortAlphaDownSolid className="h-8 w-8" />
            <span className="text-xl font-semibold">Sort</span>
          </button>
        </div>
        <div className="mb-9 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="default-checkbox" className="ms-2 text-lg font-semibold">
            Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan
            Market)
          </label>
          <Image src={HelpIcon} alt="" className="ml-2" />
        </div>
        <div className="mb-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {bankList.map((data, index) => (
            <div
              key={index}
              className="flex h-[480px] flex-col rounded-[5px] p-6 shadow-custom-shadow"
            >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-center">
                <Image src={data.logo} alt={data.name} />
              </div>
              <div className="mb-4 flex flex-col items-center">
                <Rating rating={3.5} />
                <p className="mt-1 text-sm font-medium">
                  {data.reviewer.toLocaleString('id-ID')} Reviews
                </p>
              </div>
              <h6 className="mb-2 text-base font-semibold text-[#1CABE6]">{data.name}</h6>
              <p className="text-justify text-sm font-medium">{data.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 rounded-md bg-[#005274] px-5 py-2.5 text-white">
            <FiSave className="text-xl" />
            <span className="text-lg font-semibold">UPDATE</span>
          </button>
        </div>
      </div>
    </MainLayout>
  )
}

export default EditApplication

const stepperData = [
  {
    title: 'Pinjaman',
    isActive: false,
  },
  {
    title: 'Pekerjaan',
    isActive: false,
    isPending: false,
  },
  {
    title: 'Alamat',
    isActive: false,
    isPending: false,
  },
  {
    title: 'Informasi Aset',
    isActive: false,
    isPending: false,
  },
  {
    title: 'Informasi Tambahan',
    isActive: false,
    isPending: false,
  },
  {
    title: 'Upload Dokumen',
    isActive: false,
    isPending: false,
  },
  {
    title: 'Review',
    isActive: false,
    isPending: false,
  },
  {
    title: 'Pilihan Produk & Bank',
    isActive: true,
  },
  {
    title: 'Bank Officer',
    isActive: false,
    isPending: true,
  },
  {
    title: 'Surat Keterangan',
    isActive: false,
    isPending: true,
  },
  {
    title: 'PDF CPA',
    isActive: false,
    isPending: true,
  },
  {
    title: 'Summary',
    isActive: false,
    isPending: true,
  },
]
