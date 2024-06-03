// // import React from 'react'

// // const RegularizationTabel = () => {
// //   return (
// //     <div className='col-12'>
// //         lg:col-6 xl:col-3
// //     </div>
// //   )
// // }

// // export default RegularizationTabel
// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Paginator } from "primereact/paginator";
// import SvgNextarrow from "../../../../assets/icons/SvgNextArrow";
// import "../../AttendanceScreens/DataTabel/index.scss";

// import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
// import { Button } from "primereact/button";
// import { ProductService } from "./data";

// interface Product {
//   id: string;
//   code: string;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
//   category: string;
//   quantity: number;
//   inventoryStatus: string;
//   rating: number;
//   setVisible:any
// }
// type tabelProps={
//     setVisible:React.Dispatch<React.SetStateAction<boolean>>;
// }
// const RegularizationTabel:React.FC<tabelProps>=({setVisible})=> {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [first, setFirst] = useState(0);
//   const [rows, setRows] = useState(10);

//   // Simulate an API call to fetch data
//   // useEffect(() => {
//   //     ProductService.getProductsMini().then((data: Product[]) => setProducts(data));
//   // }, []);

//   const actionBodyTemplate = (rowData: any) => {
//     return (
//       <React.Fragment>
//         <button onClick={()=>setVisible(true)} className="p-button p-button-text p-button-icon-only">
//           <SvgEyeIcon />
//         </button>
//       </React.Fragment>
//     );
//   };

//   const statusData = (rowData: any) => {
//     const getStatusStyle = (status: string) => {
//       switch (status) {
//         case "Pending":
//           return {
//             backgroundColor: "#FFEBDD",
//             color: "#FFD2B3",
//             paddingTop: "4px",
//             paddingBottom: "4px",
//             margin: "0px",
//             width: "78px",
//             fontSize: "16px",
//             fontWeight: "400",
//             borderRadius: "6px",
//           };
//         case "Rejected":
//           return {
//             backgroundColor: "#FFE1E1",
//             color: "#C60000",
//             paddingTop: "4px",
//             paddingBottom: "4px",
//             margin: "0px",
//             width: "78px",
//             fontSize: "16px",
//             fontWeight: "400",
//             borderRadius: "6px",
//           };
//         case "Approved":
//           return {
//             backgroundColor: "#C5FFC5",
//             color: "#00AA00",
//             paddingTop: "4px",
//             paddingBottom: "4px",
//             margin: "0px",
//             width: "78px",
//             fontSize: "16px",
//             fontWeight: "400",
//             borderRadius: "6px",
//           };
//         default:
//           return {};
//       }
//     };

//     return (
//      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//          <div style={getStatusStyle(rowData.Status)}>
//         <div>{rowData.Status}</div>
//       </div>
//      </div>
//     );
//   };
//   const onPageChange = (event: any) => {
//     setFirst(event.first);
//     setRows(event.rows);
//   };

//   return (
//     // style={{ borderRadius: '6px',  backgroundColor: '#fff' }}
//     <div className="shadow-1 m-0">
//       <div className="card">
//         <DataTable
//           value={ProductService}
//           scrollable
//           scrollHeight="100vh"
//           tableStyle={{ minWidth: "50rem" }}
//           paginator
//           rows={10}
//           rowsPerPageOptions={[10, 20, 30, 40]}
//           paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
//           currentPageReportTemplate="{first} to {last} of {totalRecords}"
//         >
//           <Column
//             field="S. No."
//             header="S. No."
//             headerClassName="custom-header"
//             bodyStyle={{ marginTop: "10px" }}
//           ></Column>
//           <Column
//             field="Date"
//             header="Date"
//             headerClassName="custom-header"
//           ></Column>
//           <Column
//             field="Punch In"
//             header="Request Type"
//             headerClassName="custom-header"
//           ></Column>
//           <Column
//             field="Punch Out"
//             header="Project"
//             headerClassName="custom-header"
//           ></Column>
//           <Column
//             field="Description"
//             header="Description"
//             headerClassName="custom-header"
//           ></Column>
//           <Column
//             field="Status"
//             header="Status"
//             body={statusData}
//             headerClassName="custom-header"
//           ></Column>
//           <Column
//             field="Action"
//             body={actionBodyTemplate}
//             header="Action"
//             headerClassName="custom-header"
//           ></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// }
// export default RegularizationTabel
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  ProductService,
  dropdownOptions,
  headerStyle,
  headerStyles,
} from "./data";
import "../../AttendanceScreens/DataTabel/index.scss";
import { Dropdown } from "primereact/dropdown";
import { PaginatorRowsPerPageDropdownOptions } from "primereact/paginator";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import SvgEye from "../../../../assets/icons/SvgEye";
// import CreateRequestDetailedView from "../pendingScreen/createRequestDetailedView";

type regularizationProps = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const RegularizationTabel: React.FC<regularizationProps> = ({ setVisible }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleHide = () => {
    setIsModalVisible(false);
  };
  const statusData = (rowData: any) => {
    const getStatusStyle = (status: string) => {
      switch (status) {
        case "Pending":
          return {
            backgroundColor: "#FFEBDD",
            color: "#FFD2B3",
            paddingTop: "4px",
            paddingBottom: "4px",
            margin: "0px",
            width: "78px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Rejected":
          return {
            backgroundColor: "#FFE1E1",
            color: "#C60000",
            paddingTop: "4px",
            paddingBottom: "4px",
            margin: "0px",
            width: "78px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Approved":
          return {
            backgroundColor: "#C5FFC5",
            color: "#00AA00",
            paddingTop: "4px",
            paddingBottom: "4px",
            margin: "0px",
            width: "78px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        default:
          return {};
      }
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={getStatusStyle(rowData.Status)}>
          <div>{rowData.Status}</div>
        </div>
      </div>
    );
  };
  const getStatusStyle = (rowData: { status: any }) => {
    let color, backgroundColor, borderRadius, padding;

    switch (rowData.status) {
      case "Pending":
        color = "#E05A00";
        backgroundColor = "#FFD2B3";
        borderRadius = "6px";
        padding = "0.4rem";
        break;

      default:
        color = "black";
        backgroundColor = "white";
        borderRadius = "6px";
        padding = "0.4rem";
    }
    return { color, backgroundColor, borderRadius, padding };
  };

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

  return (
    <div className="regularization__table">
      <div className="card ">
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
            headerStyle={headerStyle}
            headerClassName="custom-header"
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
            field="Description"
            header="Description"
            className="table__column"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Status"
            header="Status"
            body={statusData}
            headerClassName="custom-header"
          ></Column>

          <Column
            header="Action"
            field="Action"
            headerClassName="custom-header"
            body={() => (
              <div className="cursor-pointer" onClick={handleClick}>
                <SvgEye />
              </div>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};
export default RegularizationTabel;
