import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@fluentui/react-components';
import { RootState } from '@store/index'; 
import { useAppSelector } from '@Hooks/StoreHooks';

interface PermissionButtonProps {
  permission?: string;
  onClick?: () => void;
  children?: ReactNode;
  icon?: ButtonProps["icon"]
  appearance?: ButtonProps["appearance"]
}

const PermissionButton = ({ permission, children, ...props }: PermissionButtonProps) => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  if (!permission || (permission && user?.permissions.includes(permission))) {
    return children ? <Button {...props}>{children}</Button> : <Button {...props}/>;
  }

  return null;
};

export default PermissionButton;
