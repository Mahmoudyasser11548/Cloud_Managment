import { Button, SearchBox, Text } from '@fluentui/react-components'
import React, { useState } from 'react'
import LangsDropdown from './LangsDropdown'
import { DarkThemeRegular } from "@fluentui/react-icons";
import UserDropdown from './UserDropdown';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@Hooks/StoreHooks';
import { changeTheme } from '@store/app';
import { RootState } from '@store';

const Navbar = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {theme} = useAppSelector((state: RootState) => state.app)
  
  const handleTheme = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"))
  }

  return (
    <div className='navbar fixed top-0 w-full h-[60px] bg-colorBrandBackground flex items-center z-50'>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo-link">
          <a href="/">
            <Text className='text-white' size={400} weight='bold'>TDS Cloud</Text>
          </a>
        </div>
        
        <SearchBox appearance="outline" className='w-[200px] sm:w-[500px]' placeholder={t('Search resources, services, and docs')} />

        <div className='flex items-center space-x-3'>
          <div className="actions flex items-center space-x-2">
            <LangsDropdown />
            <Button
              appearance='primary'
              icon={<DarkThemeRegular />}
              onClick={() => handleTheme()}
            /> 
          </div>

          <div className="user-dropdown">
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar