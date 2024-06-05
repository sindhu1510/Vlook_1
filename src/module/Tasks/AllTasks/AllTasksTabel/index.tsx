import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./index.scss";
import SvgNextarrow from "../../../../assets/icons/SvgNextArrow";
import { ProductService } from "./data";
import { InputSwitch } from "primereact/inputswitch";
import SvgDots from "../../../../assets/icons/SvgDots";
import { Sidebar } from "primereact/sidebar";
import { InputTextarea } from "primereact/inputtextarea";
import SvgPlusIcon from "../../../../assets/icons/SVgPlusIcon";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import SvgPlayIcon from "../../../../assets/icons/SvgPlayIcon";
import SvgSucess from "../../../../assets/icons/SvgSucess";
import SvgSucessWhitIcon from "../../../../assets/icons/SvgWhiteIcon";
import SvgPouseIcon from "../../../../assets/icons/SvgPouseIcon";

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

const AllTasksTabel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [startPouseData, setStartPouseData] = useState("Start");
  const [value, setValue] = useState("");

  const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(
    null
  );
  const [rowClick, setRowClick] = useState<boolean>(true);
  const PreorityData = (rowData: any) => {
    console.log(rowData, "==========>");

    const getPrerityStyle = (status: string) => {
      switch (status) {
        case "Medium":
          return {
            backgroundColor: "#FFEBDD",
            color: "#FFD2B3",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "8px",
            paddingRight: "8px",
            margin: "0px",
            width: "74px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "High":
          return {
            backgroundColor: "#FFE1E1",
            color: "#C60000",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "8px",
            paddingRight: "8px",
            margin: "0px",
            width: "74px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Low":
          return {
            backgroundColor: "#C5FFC5",
            color: "#00AA00",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "8px",
            paddingRight: "8px",
            margin: "0px",
            width: "74px",
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
        <div style={getPrerityStyle(rowData.Priority)}>
          <div>{rowData.Priority}</div>
        </div>
      </div>
    );
  };
  const statusData = (rowData: any) => {
    console.log(rowData, "==========>");

    const getStatusStyle = (status: string) => {
      switch (status) {
        case "Started":
          return {
            backgroundColor: "#C2EEFF",
            color: "#0074AB",
            paddingTop: "4px",
            paddingBottom: "4px",
            // paddingLeft: "8px",
            // paddingRight: "8px",
            margin: "0px",
            width: "94px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Paused":
          return {
            backgroundColor: "#FFD2B3",
            color: "#E05A00",
            paddingTop: "4px",
            paddingBottom: "4px",
            // paddingLeft: "8px",
            // paddingRight: "8px",
            margin: "0px",
            width: "94px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Resumed":
          return {
            backgroundColor: "#C2EEFF",
            color: "#0074AB",
            paddingTop: "4px",
            paddingBottom: "4px",
            // paddingLeft: "8px",
            // paddingRight: "8px",
            margin: "0px",
            width: "94px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Yet to start":
          return {
            backgroundColor: "#C2EEFF",
            color: "#0074AB",
            paddingTop: "4px",
            paddingBottom: "4px",
            // paddingLeft: "8px",
            // paddingRight: "8px",
            margin: "0px",
            width: "94px",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "6px",
          };
        case "Completed":
          return {
            backgroundColor: "#C5FFC5",
            color: "#00AA00",
            paddingTop: "4px",
            paddingBottom: "4px",
            // paddingLeft: "8px",
            // paddingRight: "8px",
            margin: "0px",
            width: "94px",
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
  const dots = (rowData: any) => {
    return (
      <div onClick={() => setVisibleRight(true)}>
        <div>
          <SvgDots />
        </div>
      </div>
    );
  };

  return (
    <div className="tabel__tasks__All__container shadow-1 m=0">
      {/* <div className="tabel__view__header">
        <div className="attendance__list">Tasks Overdue</div>
        <SvgNextarrow />
      </div> */}
      <div className="card">
        <DataTable
          value={ProductService}
          scrollable
          //   scrollHeight="310px"
          tableStyle={{ minWidth: "50rem" }}
          //   selectionMode={rowClick ? undefined : 'multiple'}
          selection={selectedProducts}
          onSelectionChange={(e: any) => setSelectedProducts(e.value)}
          dataKey="id"
          
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>

          <Column
            field="S. No."
            header="S. No."
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Project Name"
            header="Project Name"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Tasks"
            header="Tasks"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Assigned by"
            header="Assigned by"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Priority"
            header="Priority"
            body={PreorityData}
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Start date"
            header="Start date"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Status"
            header="Status"
            body={statusData}
            headerClassName="custom-header"
          ></Column>

          <Column
            field="Action"
            header="Action"
            body={dots}
            headerClassName="custom-header"
          ></Column>
        </DataTable>
      </div>
      <Sidebar
        className="custom__drawer"
        header="Task Details"
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className="card__custom__view">
          <div>
            <div className="card__view__container shadow-1">
              <div className="create__wire">Create wireframes</div>
              <div className="assigned__view">
                <div>Assigned by</div>
                <div>James Watson</div>
              </div>
              <div className="assigned__view">
                <div>Assigned to</div>
                <div>12/12/24</div>
              </div>
              <div className="assigned__view">
                <div>Due by</div>
                <div>12/12/24</div>
              </div>
              <div className="assigned__view">
                <div>Duration</div>
                <div>02:00 hrs</div>
              </div>
              <div className="assigned__view">
                <div>Status</div>
                <div>06/04/2024</div>
              </div>
              <div className="assigned__view">
                <div>Priority</div>
                <div>06/04/2024</div>
              </div>
              <div className="assigned__view">
                <div>Projects</div>
                <div>02:00 hrs</div>
              </div>
              <div>
                <div className="description__view">Description</div>
                <div>
                  <InputTextarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={4}
                    // cols={30}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="card__view__container__two shadow-1">
              <div className="sub__task__view">
                <div className="sub__task">Sub-task</div>
                <div className="plus__icon__view">
                  <SvgPlusIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="start__confirm__view">
            <div
              onClick={() => setStartPouseData("Pouse")}
              className="start__view"
              style={{
                background: startPouseData === "Start" ? "#0074ab" : "#E05A00",
              }}
            >
              <div className="start__text">{startPouseData}</div>
              <div className="drop__icon">
                {startPouseData === "Start" ? (
                  <SvgPlayIcon />
                ) : (
                  <SvgPouseIcon />
                )}
              </div>
            </div>
            <div className="complete__view" style={{background: startPouseData === "Start" ? "#C5FFC5" : "#00AA00",}}>
              <div className="completed__text">Complete</div>
              <div className="drop__icon__complete">
                <SvgSucessWhitIcon />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default AllTasksTabel;
