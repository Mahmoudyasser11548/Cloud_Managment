import React, { ReactNode } from 'react'
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';
import { useAppSelector } from '../hooks/StoreHooks';
import { RootState } from '../../Store';

interface FluentUIContextProps {
  children: ReactNode;
}

const FluentUIContext = ({children}: FluentUIContextProps) => {
  const {theme} = useAppSelector((state: RootState) => state.app)

  return (
    <FluentProvider theme={theme === "light" ? webLightTheme : webDarkTheme}>
      {children}
    </FluentProvider>
  )
}

export default FluentUIContext