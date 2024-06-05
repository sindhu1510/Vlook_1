import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data, dropdownOptions, headerStyle } from './mock';
import './index.scss';
import { Dropdown } from 'primereact/dropdown';
import { PaginatorRowsPerPageDropdownOptions } from 'primereact/paginator';
import SvgDropdown from '../../../../../assets/icons/SvgDropdown';
import SvgEye from '../../../../../assets/icons/SvgEye';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function BasicDemo() {
  const [visibleRight, setVisibleRight] = useState<boolean>(false);

  const getStatusStyle = (rowData: { status: any; }) => {
    let color, backgroundColor, borderRadius, padding;

    switch (rowData.status) {
      case 'Rejected':
        color = '#C60000';
        backgroundColor = '#FFE1E1';
        borderRadius = '6px';
        padding = '0.4rem';
        break;
      case 'Pending':
        color = '#E05A00';
        backgroundColor = '#FFD2B3';
        borderRadius = '6px';
        padding = '0.4rem';
        break;
      case 'Approved':
        color = '#00AA00',
          backgroundColor = '#C5FFC5',
          borderRadius = '6px'
        padding = '0.4rem'
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
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}
          rowsPerPageOptions={[5, 10, 25, 50]}
          paginator
          rows={5}
          currentPageReportTemplate="{first}-{last} of {totalRecords}"
          paginatorTemplate={paginatorTemplate}>
          <Column field="sNo" header="S.No" headerStyle={headerStyle} style={{ textAlign: "center" }} />
          <Column field="appliedDate" header="Date" style={{ textAlign: "center" }} />

          <Column field="employeeName" header="Employee Name" style={{ textAlign: "center" }} />
          <Column field="leaveType" header="Leave Type" style={{ textAlign: "center" }} />

          <Column field="duration" header="Duration" style={{ textAlign: "center" }} />
          <Column
            field="status"
            header="Status"
            body={(rowData) => (
              <span style={getStatusStyle(rowData)}>
                {rowData.status}
              </span>
            )}
            style={{ textAlign: "center" }}
          />


          <Column
            header="Action"
            field="action"

            body={() => (
              <div className="cursor-pointer" onClick={() => setVisibleRight(true)}>
                <SvgEye />

              </div>
            )}
            style={{ textAlign: "center" }}

          />
        </DataTable>
        <div>
          <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} header="Leave Detail view" className='leave__deail__view'>

            <div className='jane__and__sick__text'>
              <div>
                <img src="https://i.ibb.co/bNR2XtG/leaveimage1.png" alt="leaveimage1" />
              </div>
              <div>
                <div className='jane__cooper__text'>
                  Jane Cooper
                </div >
                <div className='designer__text mt-2'>
                  Designer
                </div>
              </div>

            </div>
            <div className='mt-5'>
              <Card>
<div className='drawer__status__text'>
  Status
</div>
<div className='approve__reject__pending mt-4'>
  <div>
    Approved
  </div>
  <div>
    Rejected
  </div>
  <div>
    Pending
  </div>
</div>
              </Card>
            </div>
            <div>
              <Card className='mt-4'>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
    Request Type
  </div>
  <div className='casual__leave__text'>
    Casual Leave
  </div>
</div>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
  Leave start date
  </div>
  <div className='casual__leave__text'>
    06/04/2024
  </div>
</div>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
    07/04/2024
  </div>
  <div className='casual__leave__text'>
  Leave End date
  </div>
</div>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
  Days
  </div>
  <div className='casual__leave__text'>
  Two
  </div>
</div>
<div className='description__text mt-4'>
Description
</div>
<div className='description__sub__text mt-2'>
My sister’s wedding ceremony
</div>
              </Card>
              <div className='attached__document__text mt-4'>
                Attached Document
              </div>
            
                <Card className='mt-3'>
                <div className='no__document__text'>
                  
                No Document
                </div>
                </Card>
                <div className='attached__document__text mt-4'>
                Project Details
              </div>
              <Card className='mt-4'>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
   Project
  </div>
  <div className='casual__leave__text'>
    HRMS
  </div>
</div>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
  Project Manager
  </div>
  <div className='casual__leave__text'>
  Leslie Alexander
  </div>
</div>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
    Manager
  </div>
  <div className='casual__leave__text'>
  Wade Warren
  </div>
</div>
<div className='request__type__casual__leave mt-4'>
  <div className='request__type__text'>
  Team Lead
  </div>
  <div className='casual__leave__text'>
  Ronald Richards
  </div>
</div>



              </Card>
            </div>
            <div className='reject__and__approve__text mt-4'>
  <Button label='Reject' className='reject__button'/>
  <Button label='Approve' className='approve__button'/>
</div>
          </Sidebar>
        </div>
      </div>

    </div>
  );
}
