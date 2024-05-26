import React, { useState, useTransition } from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
} from "@fluentui/react-components";
import { LocalLanguageRegular } from "@fluentui/react-icons";
import { useAppDispatch } from '@Hooks/StoreHooks';
import { useDirection } from '@Hooks/useDirection';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '@store/app';

const LangsDropdown = () => {
  const {i18n} = useTranslation()
  const dispatch = useAppDispatch()
  const { direction, setDirection } = useDirection();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDirection(i18n.dir())
    dispatch(setLanguage(lng));
  };

  return (
    <div>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton size="medium" appearance="primary" className='text-white' icon={<LocalLanguageRegular />} />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem onClick={() => changeLanguage('ar')}>العربية</MenuItem>
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  )
}

export default LangsDropdown