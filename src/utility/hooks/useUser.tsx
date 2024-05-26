//** React Imports

import { useEffect, useState } from "react";
import { RootState } from "../../Store";
import { Permission } from "../../configs/permissions";
import { role } from "../../configs/roles";
import { useAppSelector } from "./StoreHooks";

// ** Store & Actions

export const useUser = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);

  const can = (value: Permission) => {
    return permissions.includes(value);
  };

  useEffect(() => {
    setPermissions(user?.permissions || []);
    setRoles(user?.role || []);
  }, [user]);

  const inRole = (role: role) => {
    return roles.includes(role);
  };

  const isSuperAdmin = () => {
    return roles.includes("SuperAdmin");
  };

  return {
    can: can,
    user: user,
    permission: permissions,
    roles: roles,
    inRole,
    isSuperAdmin,
  };
};
