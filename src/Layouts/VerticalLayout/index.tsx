import React, { ReactNode, useState } from 'react'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

interface VerticalLayoutProps {
  children: ReactNode
}

const VerticalLayout = ({children}: VerticalLayoutProps) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  return (
    <div className='relative'>
      <Navbar />
      <main className={`content absolute top-[60px] w-full overflow-hidden ${toggleSidebar ? "ps-[270px]" : "ps-[80px]"} transition-all p-4 shadow-inner`} style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        {children}
      </main>
      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <Footer toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default VerticalLayout
