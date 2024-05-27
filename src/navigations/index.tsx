import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSpa, faTableColumns} from "@fortawesome/free-solid-svg-icons"
import { ReactNode } from "react"
import { useUser } from "../utility/hooks/useUser"
import { useTranslation } from "react-i18next"
import { FcHome, FcLock, FcOrganization } from "react-icons/fc";

export interface NavigationsProps {
  id: string
  title: string
  navLink?: string
  icon: ReactNode
  permissions?: string
  children?: {
    id: string
    title: string
    navLink: string
    icon: ReactNode
    permissions?: string,
  }[]
}

export const navigations = () => {
  const {t} = useTranslation();
  const {permission} = useUser();

  const arr = [
    {
      id: "home",
      title: t("Home"),
      navLink: "/home",
      icon: <FcHome size={35} />,
      permissions: "read_page"
    },
    {
      id: "firewall",
      title: t("Firewall"),
      navLink: "/firewall",
      icon: <FcLock size={35}/>
    },
  ]

  const result = permission && permission.length > 0
    ? arr.filter((item) => {
        
        if (!item.permissions) return true;

        return item.permissions && permission.includes(item.permissions);
      })
    : arr;

return result;

}

// {
//   id: "dashboard",
//   title: t("Dashboard"),
//   icon: <FontAwesomeIcon icon={faTableColumns} fontSize={20} />,
//   children: [
//     // {
//     //   id: "home-1",
//     //   title: t("Home"),
//     //   navLink: "/home",
//     //   icon: <FontAwesomeIcon icon={faHouse} fontSize={20} />
//     // },
//     {
//       id: "secondPage-2",
//       title:  t("Second Page"),
//       navLink: "/second-page",
//       icon: <FontAwesomeIcon icon={faSpa} fontSize={10} />
//     },
//   ]