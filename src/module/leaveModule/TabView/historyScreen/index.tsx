import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data,dropdownOptions, headerStyle } from './mock'; 
import './index.scss';
import { Dropdown } from 'primereact/dropdown';
import { PaginatorRowsPerPageDropdownOptions } from 'primereact/paginator';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import SvgEye from '../../../../assets/icons/SvgEye';

export default function BasicDemo() {

    const getStatusStyle = (rowData: { status: any; }) => {
        let color, backgroundColor, borderRadius, padding;
      
        switch(rowData.status) {
            case 'Rejected':
                color = '#C60000';
                backgroundColor = '#FFE1E1';
                borderRadius = '6px'; 
                padding = '0.4rem'; 
                break;
           case 'Approved':
            color ='#00AA00',
            backgroundColor ='#C5FFC5',
            borderRadius ='6px'
            padding='0.4rem'
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
        <div className='leave__history__table'>
        <div className="card mt-4">
            <DataTable value={data}  tableStyle={{ minWidth: '50rem' }} 
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginator
                rows={5}
                currentPageReportTemplate="{first}-{last} of {totalRecords}"
                paginatorTemplate={paginatorTemplate}>
                <Column field="sNo" header="S.No" headerStyle={headerStyle}></Column>
                <Column field="appliedDate" header="Applied Date"></Column>
                <Column field="leaveType" header="Leave Type"></Column>
                <Column field="startDate" header="Start Date"></Column>
                <Column field="endDate" header="End Date"></Column>
                <Column field="description" header="Description" ></Column>
                <Column 
    field="status" 
    header="Status" 
    body={(rowData) => (
        <span style={getStatusStyle(rowData)}>
            {rowData.status}
        </span>
    )}
></Column>

               
                <Column
                        header="Action"
                        field="action"
                       
                        body={() => (
                            <div className="cursor-pointer">
                                <SvgEye />

                            </div>
                        )}


                    />
            </DataTable>
        </div>
        </div>
    );
}
