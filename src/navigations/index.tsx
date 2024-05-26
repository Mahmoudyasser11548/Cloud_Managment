import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse, faSpa, faTableColumns} from "@fortawesome/free-solid-svg-icons"
import { ReactNode } from "react"
import { useUser } from "../utility/hooks/useUser"
import { useTranslation } from "react-i18next"

interface NavigationsProps {
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
      icon: <FontAwesomeIcon icon={faHouse} fontSize={20} />
    },
    {
      id: "secondPage",
      title: t("Second Page"),
      navLink: "/second-page",
      icon: <FontAwesomeIcon icon={faSpa} fontSize={20} />,
      permissions: "read_page"
    },
    {
      id: "dashboard",
      title: t("Dashboard"),
      icon: <FontAwesomeIcon icon={faTableColumns} fontSize={20} />,
      children: [
        // {
        //   id: "home-1",
        //   title: t("Home"),
        //   navLink: "/home",
        //   icon: <FontAwesomeIcon icon={faHouse} fontSize={20} />
        // },
        {
          id: "secondPage-2",
          title:  t("Second Page"),
          navLink: "/second-page",
          icon: <FontAwesomeIcon icon={faSpa} fontSize={20} />
        },
      ]
    }
  ]

  const result = permission && permission.length > 0
    ? arr.filter((item) => {
        
        if (!item.permissions) return true;

        return item.permissions && permission.includes(item.permissions);
      })
    : arr;

return result;

}