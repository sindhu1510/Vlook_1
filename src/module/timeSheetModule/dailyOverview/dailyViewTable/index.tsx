import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data, dropdownOptions, headerStyle, headerStyle2, headerStyles } from './mock';
import './index.scss';
import { Dropdown } from 'primereact/dropdown';
import { PaginatorRowsPerPageDropdownOptions } from 'primereact/paginator';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';



export default function BasicDemo() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);

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
                    paginatorTemplate={paginatorTemplate} onClick={() => setVisibleRight(true)}>
                    <Column field="sNo" header="S.No" headerStyle={headerStyle} />
                    <Column field="tasks" header="Tasks" className='table__coloum__text' headerStyle={headerStyle2} />
                    <Column field="projects" header="Projects" headerStyle={headerStyle2} />
                    <Column field="h1" header="H1" headerStyle={headerStyle2} />
                    <Column field="h2" header="H2" headerStyle={headerStyle2} />
                    <Column field="h3" header="H3" headerStyle={headerStyle2} />
                    <Column field="h4" header="H4" headerStyle={headerStyle2} />
                    <Column field="h5" header="H5" headerStyle={headerStyle2} />
                    <Column field="h6" header="H6" headerStyle={headerStyle2} />
                    <Column field="h7" header="H7" headerStyle={headerStyle2} />
                    <Column field="h8" header="H8" headerStyle={headerStyle2} />
                    <Column field="description" header="Description" className="table__column" headerStyle={headerStyle2} />
                    <Column field="totalHours" header="Total Hours" className="table__column" headerStyle={headerStyles} />

                </DataTable>
                <div className="card">




                    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} style={{width:'24%'}} header="Task Details" className='daily__task__details'>
                        {/* <div className='daily__task__details'>Task Details</div> */}
                        <Card className='mt-4'>
                            <div className='daily__wireframes__text'>
                                Create wireframes
                            </div>
                            <div className='task__details__assigned__text mt-4'> 
                                <div className='assigned__text'>Assigned by</div>
                                <div className='assigned__text'>James Watson</div>
                            </div>
                            <div className='task__details__assigned__text mt-3'> 
                                <div className='assigned__text'>Assigned by</div>
                                <div className='assigned__text'>12/12/24</div>
                            </div>
                            <div className='task__details__assigned__text mt-3'> 
                                <div className='assigned__text'>Due by</div>
                                <div className='assigned__text'>12/12/24</div>
                            </div>
                            <div className='task__details__assigned__text mt-3'> 
                                <div className='assigned__text'>Duration</div>
                                <div className='assigned__text'>02:00 hrs</div>
                            </div>
                            <div className='task__details__assigned__text mt-3'> 
                                <div className='assigned__text'>Status</div>
                                <div className='assigned__text'>06/04/2024</div>
                            </div>
                            <div className='task__details__assigned__text mt-3'> 
                                <div className='assigned__text'>Priority</div>
                                <div className='assigned__text'>06/04/2024</div>
                            </div>
                            <div className='task__details__assigned__text mt-3'> 
                                <div className='assigned__text'>Project</div>
                                <div className='assigned__text'>02.00 hrs</div>
                            </div>
                            <div className='daily__description__text mt-3'>
                                Description
                            </div>
                            <div className='wire__frames__text mt-2'>
                            Create wireframes
                            </div>
                        </Card>

                    </Sidebar>




                </div>
            </div>


        </div>
    );
}
