import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./index.scss";
import SvgNextarrow from "../../../../assets/icons/SvgNextArrow";
import { ProductService } from "./data";

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

const TasksTabel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const statusData = (rowData: any) => {
    console.log(rowData, "==========>");

    const getStatusStyle = (status: string) => {
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
        <div style={getStatusStyle(rowData.Priority)}>
          <div>{rowData.Priority}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="tabel__tasks__overDue__container shadow-1 m=0">
      <div className="tabel__view__header">
        <div className="attendance__list">Tasks Overdue</div>
        <SvgNextarrow />
      </div>
      <div className="card">
        <DataTable
          value={ProductService}
          scrollable
          scrollHeight="310px"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="S. No."
            header="S. No."
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
            field="Due Date"
            header="Due Date"
            headerClassName="custom-header"
          ></Column>
          <Column
            field="Priority"
            header="Priority"
            body={statusData}
            headerClassName="custom-header"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default TasksTabel;
