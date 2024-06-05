import React, { useRef, useState } from "react";
import "./index.scss";
import { Dropdown } from "primereact/dropdown";
import SvgFilter from "../../../assets/icons/SvgFilter";
import SvgFilerIcon from "../../../assets/icons/SvgFilter";
import AllTasksTabel from "./AllTasksTabel";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import SvgDropdownIcon from "../../../assets/icons/SvgDropDownIcon";
import ImportPopup from "./ImportPopup";
import ExportModal from "./ExportModal";

const AllTasks = () => {
  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [data, setData] = useState("Import");
  const toast = useRef(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const categories = [
    { name: "Yet to start", key: "A" },
    { name: "Started", key: "M" },
    { name: "Paused", key: "P" },
    { name: "Resumed", key: "R" },
    { name: "Completed", key: "R" },
  ];
  const categoriesTwo = [
    { name: "High", key: "A" },
    { name: "Medium", key: "M" },
    { name: "Low", key: "P" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([categories[0]]);
  const [selectedCategoriesTwo, setSelectedCategoriesTwo] = useState([
    categoriesTwo[0],
  ]);

  const onCategoryChange = (e: any) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };
  const onCategoryChangeTwo = (e: any) => {
    let _selectedCategories = [...selectedCategoriesTwo];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategoriesTwo(_selectedCategories);
  };
  const confirm2 = (event: any) => {
    confirmPopup({
      target: event.currentTarget,
      message: (
        <div className="import__export__view">
          <div
            onClick={() => {
              setVisible(true);
              setData("Import");
            }}
            className="import__text"
          >
            Import
          </div>
          <div
            onClick={() => {
              setVisibleTwo(true);
              setData("Export");
            }}
            className="export__text"
          >
            Export
          </div>
        </div>
      ),
    });
  };
  const confirm1 = (event: any) => {
    confirmPopup({
      target: event.currentTarget,
      message: (
        <>
          <div className="flex">
            <div className="filter__view">
              <div className="filter__status__text">Filter by status</div>
              {categories.map((category) => {
                return (
                  <div key={category.key} className="flex m-1">
                    <Checkbox
                      className="checkbox__color"
                      inputId={category.key}
                      name="category"
                      value={category}
                      onChange={onCategoryChange}
                      checked={selectedCategories.some(
                        (item) => item.key === category.key
                      )}
                    />
                    <label htmlFor={category.key} className="ml-2 label__name">
                      {category.name}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="filter__next__view">
              <div className="filter__status__text">Filter by priority</div>
              {categoriesTwo.map((category) => {
                return (
                  <div key={category.key} className="flex m-1">
                    <Checkbox
                      className="checkbox__color"
                      inputId={category.key}
                      name="category"
                      value={category}
                      onChange={onCategoryChangeTwo}
                      checked={selectedCategoriesTwo.some(
                        (item) => item.key === category.key
                      )}
                    />
                    <label htmlFor={category.key} className="ml-2 label__name">
                      {category.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="button_view">
            <Button className="apply__filter__button" label="Apply Filter" />
          </div>
        </>
      ),
    });
  };

  return (
    <div className="grid m-0 allTasks__container">
      <div className="col-6">
        <div className="all__tasks__text">All Tasks</div>
      </div>
      <div className="col-6">
        <div className="request__type__dropdown">
          <div
            style={{
              backgroundColor: data === "Export" ? "#C2EEFF" : "#0047AB",
            }}
            className="drop__down__import__view"
          >
            <div
              className="import__text"
              style={{ color: data === "Export" ? "#0074AB" : "#ffff" }}
            >
              {data}
            </div>
            <div
              className="border__right__view"
              style={{
                borderRight:
                  data === "Export" ? "3px solid #0074AB" : "3px solid #fff",
              }}
            ></div>
            <div onClick={confirm2}>
              <SvgDropdownIcon
                color={data === "Export" ? "#0074AB" : "#ffff"}
              />
            </div>
          </div>
          <div className="border__view"></div>
          <div onClick={confirm1} className="filer__icon">
            <SvgFilerIcon />
          </div>
        </div>
      </div>
      <div className="col-12 tabel__view">
        <AllTasksTabel />
      </div>
      <div>
        <ConfirmPopup />
      </div>
      <ImportPopup visible={visible} setVisible={setVisible} />
      <ExportModal visibleTwo={visibleTwo} setVisibleTwo={setVisibleTwo} />
    </div>
  );
};

export default AllTasks;
