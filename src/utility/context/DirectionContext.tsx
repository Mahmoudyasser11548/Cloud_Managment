import React, { ReactNode, createContext, useContext, useState } from 'react';
import { useAppSelector } from '../hooks/StoreHooks';
import { RootState } from '../../Store';

type Direction = 'ltr' | 'rtl';

interface DirectionContextProps {
  direction: Direction;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

const DirectionContext = createContext<DirectionContextProps | undefined>(undefined);

const DirectionProvider = ({ children }: {children: ReactNode}) => {
  const [direction, setDirection] = useState<Direction>('ltr');
  const {direction: storeDir} = useAppSelector((state: RootState) => state.app)
  return (
    <DirectionContext.Provider value={{ direction, setDirection }}>
      <div className='handle-direction' dir={localStorage.getItem("direction") || storeDir}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
};

export {DirectionContext}
export default DirectionProvider