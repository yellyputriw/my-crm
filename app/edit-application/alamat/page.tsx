import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'

import MainLayout from '@/app/components/MainLayout'

const AddressPage = () => {
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
          <h3 className="mb-2 text-3xl font-semibold">Alamat</h3>
        </div>
        <button className="rounded-full bg-[#17A9E2] p-2 text-white">
          <FaArrowRight className="h-[45px] w-[45px]" />
        </button>
      </div>
      <div className="mx-4 mb-9 rounded-2xl bg-white px-8 py-6 shadow-custom-shadow">
        <form className="">
          <div className="flex w-full flex-col">
            <div className="w-full bg-[#005274]">
              <p className="border border-[#c1c1c1] px-8 py-4 font-semibold text-white">Data KTP</p>
            </div>
            <div className="grid grid-cols-1 gap-6 border border-[#c1c1c1] px-8 py-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Alamat Lengkap (Jalan, Komplek, RT/RW)
                </label>
                <input
                  type="text"
                  placeholder="--Isi Alamat Lengkap--"
                  className="mt-2 rounded-[5px] border border-[#c1c1c1] px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kode POS
                </label>
                <input
                  type="text"
                  placeholder="--Isi Kode POS--"
                  className="mt-2 rounded-[5px] border border-[#c1c1c1] px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Provinsi
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Provinsi--
                  </option>
                  <option value="Banten">Banten</option>
                  <option value="DKI Jakarta">DKI Jakarta</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kabupaten / Kota
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kota--
                  </option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kecamatan
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kecamatan--
                  </option>
                  <option value="Cilandak">Cilandak</option>
                  <option value="Jagakarsa">Jagakarsa</option>
                  <option value="Kebayoran Baru">Kebayoran Baru</option>
                  <option value="Kebayoran Lama">Kebayoran Lama</option>
                  <option value="Mampang Prapatan">Mampang Prapatan</option>
                  <option value="Pancoran">Pancoran</option>
                  <option value="Pasar Minggu">Pasar Minggu</option>
                  <option value="Pesanggrahan">Pesanggrahan</option>
                  <option value="Setiabudi">Setiabudi</option>
                  <option value="Tebet">Tebet</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kelurahan
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kelurahan--
                  </option>
                  <option value="Kuningan Barat">Kuningan Barat</option>
                  <option value="Pela Mampang">Pela Mampang</option>
                  <option value="Bangka">Bangka</option>
                  <option value="Tegal Parang">Tegal Parang</option>
                  <option value="Mampang Prapatan">Mampang Prapatan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-6 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="default-checkbox" className="ms-2 text-base font-semibold">
              Domisili Sesuai KTP
            </label>
          </div>
          <div className="flex w-full flex-col">
            <div className="w-full bg-[#005274]">
              <p className="border border-[#c1c1c1] px-8 py-4 font-semibold text-white">
                Data Domisili
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 border border-[#c1c1c1] px-8 py-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Alamat Lengkap (Jalan, Komplek, RT/RW)
                </label>
                <input
                  type="text"
                  placeholder="--Isi Alamat Lengkap--"
                  className="mt-2 rounded-[5px] border border-[#c1c1c1] px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kode POS
                </label>
                <input
                  type="text"
                  placeholder="--Isi Kode POS--"
                  className="mt-2 rounded-[5px] border border-[#c1c1c1] px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Provinsi
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Provinsi--
                  </option>
                  <option value="Banten">Banten</option>
                  <option value="DKI Jakarta">DKI Jakarta</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kabupaten / Kota
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kota--
                  </option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kecamatan
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kecamatan--
                  </option>
                  <option value="Cilandak">Cilandak</option>
                  <option value="Jagakarsa">Jagakarsa</option>
                  <option value="Kebayoran Baru">Kebayoran Baru</option>
                  <option value="Kebayoran Lama">Kebayoran Lama</option>
                  <option value="Mampang Prapatan">Mampang Prapatan</option>
                  <option value="Pancoran">Pancoran</option>
                  <option value="Pasar Minggu">Pasar Minggu</option>
                  <option value="Pesanggrahan">Pesanggrahan</option>
                  <option value="Setiabudi">Setiabudi</option>
                  <option value="Tebet">Tebet</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kelurahan
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kelurahan--
                  </option>
                  <option value="Kuningan Barat">Kuningan Barat</option>
                  <option value="Pela Mampang">Pela Mampang</option>
                  <option value="Bangka">Bangka</option>
                  <option value="Tegal Parang">Tegal Parang</option>
                  <option value="Mampang Prapatan">Mampang Prapatan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-6 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="default-checkbox" className="ms-2 text-base font-semibold">
              Alamat tempat Bekerja / perusahaan Sesuai KTP
            </label>
          </div>
          <div className="flex w-full flex-col">
            <div className="w-full bg-[#005274]">
              <p className="border border-[#c1c1c1] px-8 py-4 font-semibold text-white">
                Data Alamat Tempat Bekerja
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 border border-[#c1c1c1] px-8 py-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Alamat Lengkap (Jalan, Komplek, RT/RW)
                </label>
                <input
                  type="text"
                  placeholder="--Isi Alamat Lengkap--"
                  className="mt-2 rounded-[5px] border border-[#c1c1c1] px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kode POS
                </label>
                <input
                  type="text"
                  placeholder="--Isi Kode POS--"
                  className="mt-2 rounded-[5px] border border-[#c1c1c1] px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Provinsi
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Provinsi--
                  </option>
                  <option value="Banten">Banten</option>
                  <option value="DKI Jakarta">DKI Jakarta</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kabupaten / Kota
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kota--
                  </option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kecamatan
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kecamatan--
                  </option>
                  <option value="Cilandak">Cilandak</option>
                  <option value="Jagakarsa">Jagakarsa</option>
                  <option value="Kebayoran Baru">Kebayoran Baru</option>
                  <option value="Kebayoran Lama">Kebayoran Lama</option>
                  <option value="Mampang Prapatan">Mampang Prapatan</option>
                  <option value="Pancoran">Pancoran</option>
                  <option value="Pasar Minggu">Pasar Minggu</option>
                  <option value="Pesanggrahan">Pesanggrahan</option>
                  <option value="Setiabudi">Setiabudi</option>
                  <option value="Tebet">Tebet</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="address" className="text-base font-semibold">
                  Kelurahan
                </label>
                <select
                  id="countries"
                  className="mt-2 block w-full rounded-[5px] border border-[#c1c1c1] bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-[#646567] focus:border-[#005274] focus:ring-[#005274]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Kelurahan--
                  </option>
                  <option value="Kuningan Barat">Kuningan Barat</option>
                  <option value="Pela Mampang">Pela Mampang</option>
                  <option value="Bangka">Bangka</option>
                  <option value="Tegal Parang">Tegal Parang</option>
                  <option value="Mampang Prapatan">Mampang Prapatan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="flex items-center gap-2 rounded-md bg-[#005274] px-5 py-2.5 text-white">
              <FiSave className="text-xl" />
              <span className="text-lg font-semibold">UPDATE</span>
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}

export default AddressPage

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
    isActive: true,
  },
  {
    title: 'Informasi Aset',
    isActive: false,
    isPending: true,
  },
  {
    title: 'Informasi Tambahan',
    isActive: false,
    isPending: true,
  },
  {
    title: 'Upload Dokumen',
    isActive: false,
    isPending: true,
  },
  {
    title: 'Review',
    isActive: false,
    isPending: true,
  },
  {
    title: 'Pilihan Produk & Bank',
    isActive: false,
    isPending: true,
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
