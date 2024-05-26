import React from 'react'
import { LayoutProps } from '../types'
import { useTranslation } from 'react-i18next'

const Footer = ({toggleSidebar}: LayoutProps) => {
  const {t} = useTranslation();

  return (
    <footer className={`footer fixed ${toggleSidebar ? "ps-[270px]" : "ps-[80px]"} transition-all bottom-0 w-full p-4 flex justify-between items-center`}>
      <span className="container block md:inline-block mt-25">
        {t("COPYRIGHT")} © {new Date().getFullYear()}
        <a href="#" target="_blank" rel="noopener noreferrer" className='text-colorBrandForegroundLink'>
          TDS
        </a>
        <span className="none sm:inline-block">, {t("All rights Reserved")}</span>
      </span>
      <span className="flex items-center w-[160px]">
        {t("Powered by")}
        <a href="http://www.imakaseb.com/" target="_blank" className='text-colorBrandForegroundLink mx-1'>
          iMakaseb
        </a>
      </span>
    </footer>
  )
}

export default Footer