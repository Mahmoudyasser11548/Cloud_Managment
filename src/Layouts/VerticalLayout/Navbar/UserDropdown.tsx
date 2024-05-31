import React from 'react'
import {
  Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Persona,
} from "@fluentui/react-components";
import { SignOutRegular } from "@fluentui/react-icons";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const UserDropdown = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  return (
    <div>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button size="large" appearance="primary">
            <Persona
              className='w-full'
              textPosition="before"
              name="Kevin Sturgis"
              presence={{ status: "available" }}
              secondaryText="Available"
            />
          </Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList >
            <MenuItem icon={<SignOutRegular />} onClick={() => navigate("/login")} >{t("Logout")}</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  )
}

export default UserDropdown