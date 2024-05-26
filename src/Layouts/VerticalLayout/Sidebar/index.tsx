import { Button } from '@fluentui/react-components';
import React, { useState } from 'react';
import { ChevronDoubleLeftRegular, ChevronDoubleRightRegular, ChevronDownRegular, ChevronUpRegular } from "@fluentui/react-icons";
import { LayoutProps } from "../types.ts";
import { NavigationsProps, navigations } from '../../../navigations/index.tsx';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@Hooks/StoreHooks';
import { RootState } from '@store';

const Sidebar = ({ toggleSidebar, setToggleSidebar }: LayoutProps) => {
  const [showSubItems, setShowSubItems] = useState<boolean[]>(new Array(navigations.length).fill(false));
  const { direction } = useAppSelector((state: RootState) => state.app)

  const handleToggleSubItems = (index: number) => {
    setShowSubItems(prev => {
      const newShowSubItems = [...prev];
      newShowSubItems[index] = !newShowSubItems[index];
      return newShowSubItems;
    });
  };

  const toggleIcom = () => {
    if (toggleSidebar) {
      if (direction === "ltr") {
        return <ChevronDoubleLeftRegular />
      } else {
        return <ChevronDoubleRightRegular />
      }
    } else {
      if (direction === "ltr") {
        return <ChevronDoubleRightRegular  />
      } else {
        return <ChevronDoubleLeftRegular />
      }
    }
  }

  return (
    <div className={`sidebar fixed top-[60px] min-h-screen transition-all ${toggleSidebar ? "w-[250px]" : "w-[55px]"} shadow-2xl`}>
      <div className={`toggle-btn w-full ${direction === "ltr" ? "text-right" : "text-left"}`}>
        <Button appearance='subtle' className='p-1' icon={toggleIcom()} onClick={() => setToggleSidebar((prev) => !prev)} />
      </div>
      <ul className='list-items list-none'>
        {navigations().map((item: NavigationsProps, index) => (
          <li key={index} className={`flex flex-col`}>
            <NavLink
              to={item.navLink}
              className={({ isActive }) =>
                `flex items-center transition-all w-full h-[40px] p-4 py-2 ${isActive ? "bg-colorSubtleBackgroundHover hover:bg-colorSubtleBackgroundHover" : ""} ease-linear`
              }
            >
              {item.icon}
              {toggleSidebar && (
                <div className='relative flex items-center justify-between w-full'>
                  <span className='text-base ms-3'>{item.title}</span>
                  {item?.children && (
                    <Button appearance='transparent' icon={showSubItems[index] ? <ChevronUpRegular fontSize={20} /> : <ChevronDownRegular fontSize={20} />} onClick={() => handleToggleSubItems(index)} />
                  )}
                </div>
              )}
            </NavLink>
            {item?.children && showSubItems[index] && (
              <ul className={`flex flex-col`}>
                {item.children.map((subItem, subIndex) => (
                  <li key={subIndex} className='flex items-center'>
                    <NavLink
                      to={subItem.navLink}
                      className={({ isActive }) =>
                        `flex items-center transition-all w-full h-[40px] p-4 py-2  ease-linear ${isActive ? "bg-colorSubtleBackgroundHover hover:bg-colorSubtleBackgroundHover" : ""}`
                      }
                    >
                      {subItem.icon}
                      {toggleSidebar && <span className='text-sm ms-3'>{subItem.title}</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
