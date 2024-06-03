import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data, dropdownOptions, headerStyle,headerStyle1 } from './mock';
import './index.scss';
import { Dropdown } from 'primereact/dropdown';
import { PaginatorRowsPerPageDropdownOptions } from 'primereact/paginator';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import SvgEye from '../../../../assets/icons/SvgEye';
import SvgDownload from '../../../../assets/icons/SvgDownload';



export default function BasicDemo() {

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
                    <Column field="sNo" header="S.No" headerStyle={headerStyle} />
                    <Column field="tasks" header="Tasks" className='table__coloum__text'headerStyle={headerStyle1}/>
                    
                    <Column field="monday" header="Mon 12/12/24" headerStyle={headerStyle1}/>
                    <Column field="tuesday" header="Tue 12/12/24" headerStyle={headerStyle1}/>
                <Column field="wednesday" header="Wed 12/12/24" headerStyle={headerStyle1}/>
                    <Column field="thursday" header="Thu 12/12/24" headerStyle={headerStyle1}/>
                    <Column field="friday" header="Fri 12/12/24" headerStyle={headerStyle1}/>
                    <Column field="saturday" header="Sat 12/12/24" headerStyle={headerStyle1}/>
                    <Column field="sunday" header="Sun 12/12/24" headerStyle={headerStyle1}/>
                    <Column field="totalHours" header="Total Hours" className="table__column" headerStyle={headerStyle1}/>
                    <Column
                        header="Action"
                        field="action"
                       
                        body={() => (
                            <div className="eye__and__download__icon cursor-pointer">
                                <SvgDownload/>
                                <SvgEye />

                            </div>
                        )}

                        // headerStyle={headerStyle1}
                    />
                </DataTable>
            </div>

        </div>
    );
}
