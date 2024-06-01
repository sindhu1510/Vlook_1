import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data, dropdownOptions, headerStyle } from './mock';
import './index.scss';
import { Dropdown } from 'primereact/dropdown';
import { PaginatorRowsPerPageDropdownOptions } from 'primereact/paginator';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';



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
                    <Column field="tasks" header="Tasks" />
                    <Column field="projects" header="Projects" />
                    <Column field="h1" header="H1" />
                    <Column field="h2" header="H2" />
                    <Column field="h3" header="H3" />
                    <Column field="h4" header="H4"></Column>
                    <Column field="h5" header="H5" />
                    <Column field="h6" header="H6" />
                    <Column field="h7" header="H7" />
                    <Column field="h8" header="H8" />
                    <Column field="description" header="Description" className="table__column" ></Column>
                    <Column field="description" header="Total Hours" className="table__column" />

                </DataTable>
            </div>

        </div>
    );
}
