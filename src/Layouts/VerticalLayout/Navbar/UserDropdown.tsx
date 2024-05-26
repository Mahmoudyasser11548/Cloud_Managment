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

const UserDropdown = () => {
  const {t} = useTranslation()

  return (
    <div>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button size="large" appearance="primary">
            <Persona
              textPosition="before"
              name="Kevin Sturgis"
              presence={{ status: "available" }}
              secondaryText="Available"
            />
          </Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList >
            <MenuItem icon={<SignOutRegular />}>{t("Logout")}</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  )
}

export default UserDropdown