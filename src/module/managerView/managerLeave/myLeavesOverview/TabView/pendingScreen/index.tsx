import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data, dropdownOptions, headerStyle } from './mock';
import './index.scss';
import { Dropdown } from 'primereact/dropdown';
import { PaginatorRowsPerPageDropdownOptions } from 'primereact/paginator';
import SvgDropdown from '../../../../../../assets/icons/SvgDropdown';
import SvgEye from "../../../../../../assets/icons/SvgEye";
import CreateRequestDetailedView from '../pendingScreen/createRequestDetailedView'

export default function BasicDemo() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClick = () => {
        setIsModalVisible(true);
    };

    const handleHide = () => {
        setIsModalVisible(false);
    };

    const getStatusStyle = (rowData: { status: any; }) => {
        let color, backgroundColor, borderRadius, padding;

        switch (rowData.status) {
            case 'Pending':
                color = '#E05A00';
                backgroundColor = '#FFD2B3';
                borderRadius = '6px';
                padding = '0.4rem';
                break;

            default:
                color = 'black';
                backgroundColor = 'white';
                borderRadius = '6px';
                padding = '0.4rem';
        }
        return { color, backgroundColor, borderRadius, padding };
    };

    const paginatorTemplate = {
        layout: "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
            return (
                <div className='pagination__count'>
                    <span
                        className="mx-1 pagination__count__title"
                    >
                        Row count :{" "}
                    </span>
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
        <div className='leave__pending__table'>
            <div className="card mt-4">
                <DataTable value={data} tableStyle={{ minWidth: '50rem' }}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    paginator
                    rows={5}
                    currentPageReportTemplate="{first}-{last} of {totalRecords}"
                    paginatorTemplate={paginatorTemplate}>
                    <Column field="sNo" header="S.No" headerStyle={headerStyle} style={{textAlign:'center'}}></Column>
                    <Column field="appliedDate" header="Applied Date" style={{textAlign:'center'}}></Column>
                    <Column field="leaveType" header="Leave Type" style={{textAlign:'center'}}></Column>
                    <Column field="startDate" header="Start Date" style={{textAlign:'center'}}></Column>
                    <Column field="endDate" header="End Date" style={{textAlign:'center'}}></Column>
                    <Column field="description" header="Description" className="table__column" style={{textAlign:'center'}}></Column>
                    <Column
                        field="status"
                        header="Status"
                        body={(rowData) => (
                            <span style={getStatusStyle(rowData)}>
                                {rowData.status}
                            </span>
                        )}
                        style={{textAlign:'center'}}
                    ></Column>


                    <Column
                        header="Action"
                        field="action"

                        body={() => (
                            <div className="cursor-pointer" onClick={handleClick}>
                                <SvgEye />

                            </div>
                        )}

                        style={{textAlign:'center'}}
                    />

                </DataTable>
            </div>
            <CreateRequestDetailedView visible={isModalVisible} onHide={handleHide} />
        </div>
    );
}
