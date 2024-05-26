import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface BlankLayoutProps {
  children: ReactNode
}

const BlankLayout = ({children}: BlankLayoutProps) => {
  return (
    <div className='w-full min-h-screen'>
      <main>
        {children}
      </main>
    </div>
  )
}

export default BlankLayout