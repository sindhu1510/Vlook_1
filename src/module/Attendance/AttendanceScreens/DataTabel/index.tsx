import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './tabelData';
import SvgNextarrow from '../../../../assets/icons/SvgNextArrow';
import "../DataTabel/index.scss"

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

export default function BasicDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    return (
       <div  className='tabel__container shadow-1 m=0'>
        <div className='tabel__view__header'>
            <div className='attendance__list'>
            Attendance List
            </div>
            <SvgNextarrow/>
        </div>
         <div className="card" >
            <DataTable value={ProductService} scrollable scrollHeight="310px" tableStyle={{ minWidth: '50rem' }}>
                <Column field="S. No." header="S. No." headerClassName="custom-header"></Column>
                <Column field="Date" header="Date" headerClassName="custom-header"></Column>
                <Column field="Punch In" header="Punch In" headerClassName="custom-header"></Column>
                <Column field="Punch Out" header="Punch Out" headerClassName="custom-header"></Column>
                <Column field="Work hrs" header="Work hrs" headerClassName="custom-header"></Column>
                <Column field="Break hrs" header="Break hrs" headerClassName="custom-header"></Column>
                <Column field="Total hrs" header="Total hrs" headerClassName="custom-header"></Column>
            </DataTable>
        </div>
       </div>
    );
}
