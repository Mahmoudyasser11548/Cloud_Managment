import { TableActions } from "@components/index";
import { Button } from "@fluentui/react-components";
import { FcDeleteColumn, FcEditImage } from "react-icons/fc";

// src/data/sampleData.ts
export const sampleData = [
  { id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
  { id: 3, name: 'Sam Johnson', age: 45, email: 'sam.johnson@example.com' },
];

export const Columns =  (editHandler, deleteHandler) => [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: 'Name',
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: 'Age',
    selector: (row: any) => row.age,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Actions",
    selector: "action",
    right: true,
    cell: (row: any) => (
      <>
        <TableActions 
          row={row}
          editPermission=""
          deletePermission=""
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </>
    ),
  },
];
