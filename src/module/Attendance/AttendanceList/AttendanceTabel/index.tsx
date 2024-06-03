import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator, PaginatorRowsPerPageDropdownOptions } from "primereact/paginator";
import SvgNextarrow from "../../../../assets/icons/SvgNextArrow";
import "../../AttendanceScreens/DataTabel/index.scss";
import { ProductService , dropdownOptions,
  headerStyle,
  headerStyles,} from "./data";
import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}
type AttendanceTabelProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AttendanceTabel: React.FC<AttendanceTabelProps> = ({ setVisible }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const paginatorTemplate = {
    layout:
      "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
      return (
        <div className="pagination__count">
          <span className="mx-1 pagination__count__title">Row count : </span>
          <Dropdown
            value={options.value}
            className="pagedropdown_container"
            options={dropdownOptions}
            onChange={options.onChange}
            dropdownIcon={<SvgDropdown />}
          />
        </div>
      );
    },
  };
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <button
           onClick={() => setVisible(true)}
          className="p-button p-button-text p-button-icon-only"
        >
          <SvgEyeIcon />
        </button>
      </React.Fragment>
    );
  };

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    
    <div className=" m-0 regularization__table">
      <div className="card" style={{ marginTop: "16px" }}>
        <DataTable
          value={ProductService}
          tableStyle={{ minWidth: "50rem" }}
          rowsPerPageOptions={[5, 10, 25, 50]}
          paginator
          rows={5}
          currentPageReportTemplate="{first}-{last} of {totalRecords}"
          paginatorTemplate={paginatorTemplate}
         
        >
          <Column
            field="S. No."
            header="S. No."
            headerClassName="custom-header"
            bodyStyle={{ marginTop: "10px" }}
          ></Column>
          <Column
            field="Date"
            header="Date"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Punch In"
            header="Punch In"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Punch Out"
            header="Punch Out"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Work hrs"
            header="Work hrs"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Break hrs"
            header="Break hrs"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Total hrs"
            header="Total hrs"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Action"
            body={actionBodyTemplate}
            header="Action"
            headerClassName="custom-header"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default AttendanceTabel;
