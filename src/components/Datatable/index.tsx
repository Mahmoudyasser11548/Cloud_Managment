import React from "react";
import Datatable, { TableColumn } from "react-data-table-component";
import config from "@configs";
import Search from "./SearchInput";
import { useTranslation } from "react-i18next";
import { Spinner } from "@fluentui/react-components";
import "../../assets/styles/react-datatable.css"

interface CustomDataTableProps {
  keyField: string;
  data: any[];
  loading: boolean;
  columns: TableColumn<any>[];
  filter: any;
  setFilter: (filter: any) => void;
  metadata: any;
  subHeader?: boolean;
  noHeader?: boolean;
  search?: boolean;
  sortServer?: boolean;
  selectableRows?: boolean;
  onSelectedRowsChange?: (selected: any) => void;
  selectableRowSelected?: (row: any) => boolean;
  onRowClicked?: (row: any, event: React.MouseEvent) => void;
  customStyles?: any;
  [x: string]: any;
}

const CustomDataTable = ({
  keyField,
  data = [],
  loading,
  columns,
  filter,
  setFilter,
  metadata,
  subHeader = true,
  noHeader = false,
  search = true,
  sortServer,
  selectableRows = false,
  onSelectedRowsChange,
  selectableRowSelected,
  onRowClicked = () => {},
  customStyles,
  ...props
}: CustomDataTableProps) => {
  const { t } = useTranslation();

  const handlePageChange = (page: number) => {
    setFilter({ ...filter, page });
  };

  const handleRowsPerPageChange = (rowsPerPage: number, currentPage: number) => {
    setFilter({ ...filter, page: 1, pageSize: rowsPerPage });
  };

  const handleSort = (column: TableColumn<any>, sortDirection: "asc" | "desc") => {
    setFilter({ ...filter, sortBy: column.selector, sortOrder: sortDirection });
  };

  const paginationRowsPerPageOptions = config.pageOptions;

  if (!filter || !setFilter) {
    return null;
  }

  return (
    <Datatable
      className="react-dataTable"
      keyField={keyField}
      data={data}
      columns={columns}
      noHeader={noHeader}
      paginationTotalRows={metadata?.totalItemCount || 0}
      paginationPerPage={filter?.pageSize || 0}
      progressPending={loading}
      onRowClicked={onRowClicked}
      onChangePage={handlePageChange}
      paginationDefaultPage={filter?.page || 0}
      paginationServer
      onChangeRowsPerPage={handleRowsPerPageChange}
      subHeader={subHeader}
      sortServer={sortServer}
      onSort={handleSort}
      customStyles={customStyles}
      selectableRows={selectableRows}
      selectableRowSelected={selectableRowSelected}
      onSelectedRowsChange={onSelectedRowsChange}
      noDataComponent={<div className="my-3">{t("No Data to Display")}</div>}
      subHeaderComponent={search && <Search setFilter={setFilter} filter={filter} />}
      clearSelectedRows={false}
      persistSelectedRowsOnPageChange={{
        allSelected: false,
        selectedCount: 0,
        selectedRows: [],
      }}
      paginationServerOptions={{
        persistSelectedOnPageChange: false,
        persistSelectedOnSort: true,
      }}
      progressComponent={<div className="py-3"><Spinner label={t("Loading")} size="huge"/></div>}
      style={{ cursor: "pointer" }}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      {...props}
    />
  );
};

export default CustomDataTable;
