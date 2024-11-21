import { ReactNode } from 'react'

import Header from '@/app/components/Header'
import SideBar from '@/app/components/Sidebar'

interface IMainLayout {
  children: ReactNode
  pageTitle: string
}

const MainLayout = ({ children, pageTitle }: IMainLayout) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex w-full flex-col lg:ml-[270px]">
        <Header pageTitle={pageTitle} />
        <main className="min-h-screen bg-[#f2f2f2]">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
