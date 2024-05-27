import { Button } from "@fluentui/react-components";
import React from "react";
import { FcDeleteColumn, FcEditImage } from "react-icons/fc";
import PermissionButton from "./PermissionButton";

interface TableActionsProps {
  row: any; 
  editPermission: string;
  deletePermission: string;
  editHandler: (row: any) => void;
  deleteHandler: (row: any) => void;
  hideDelete?: boolean;
  hideEdit?: boolean;
}

const TableActions = ({
  row,
  editPermission,
  deletePermission,
  editHandler,
  deleteHandler,
  hideDelete = false,
  hideEdit = false,
}: TableActionsProps) => {
  return (
    <>
      {!hideEdit && (
         <PermissionButton permission={editPermission} icon={<FcEditImage />} appearance="subtle" onClick={() => editHandler(row)} />
      )}
      {!hideDelete && (
        <PermissionButton permission={deletePermission} icon={<FcDeleteColumn />} appearance="subtle" onClick={() => deleteHandler(row)} />
      )}
    </>
  );
};

export default TableActions;
