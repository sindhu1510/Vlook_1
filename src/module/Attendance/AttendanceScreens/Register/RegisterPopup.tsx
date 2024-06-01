// import { Dialog } from "primereact/dialog";
// import { Dropdown } from "primereact/dropdown";
// import { InputTextarea } from "primereact/inputtextarea";
// import React, { useState } from "react";
// import "./index.scss";
// import { Button } from "primereact/button";

// type registerProps = {
//   visible: any;
//   setVisible: any;
// };
// const RegisterPopup: React.FC<registerProps> = ({ visible, setVisible }) => {
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [value, setValue] = useState("");
//   const cities = [
//     { name: "New York", code: "NY" },
//     { name: "Rome", code: "RM" },
//     { name: "London", code: "LDN" },
//     { name: "Istanbul", code: "IST" },
//     { name: "Paris", code: "PRS" },
//   ];
//   return (
//     <div className="register__popup">
//       <Dialog
//         header="Create Regularization Request"
//         visible={visible}
//         style={{ width: "40vw" }}
//         onHide={() => {
//           if (!visible) return;
//           setVisible(false);
//         }}
//       >
//         <div className="grid all__alighment__view">
//           <div className="col-6">
//             <div className="input__name">
//               Request type <span className="star__text">*</span>
//             </div>
//             <Dropdown value={'Sick Leave'} onChange={(e) => setSelectedCity(e.value)} options={cities}
//                                     optionGroupLabel="label" optionGroupChildren="items" placeholder="Select" className='request__type__dropdown' />
                          
//           </div>
//           <div className="col-6">
//             <div className="input__name">
//               Request type <span className="star__text">*</span>
//             </div>
//             <Dropdown
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.value)}
//               options={cities}
//               optionLabel="name"
//               placeholder="Select a City"
//               className="w-full"
//               // className="w-full p-dropdown p-dropdown-label input__view__drop "
//             />
//           </div>
//           <div className="col-12">
//             <div className="input__name">
//               To<span className="star__text">*</span>
//             </div>
//             <Dropdown
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.value)}
//               options={cities}
//               optionLabel="name"
//               placeholder="Select a City"
//               className="w-full"
//             />
//           </div>
//           <div className="col-12">
//             <div className="input__name">
//               Description<span className="star__text">*</span>
//             </div>
//             <InputTextarea
//               className="w-full p-dropdown p-dropdown-label input__view__drop__TextArea "
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//               rows={5}
//               cols={30}
//             />
//           </div>
//           <div className="col-12">
//             <div
//               className="flex justify-end items-end"
//               style={{
//                 display: "flex",
//                 justifyContent: "end",
//                 alignItems: "end",
//               }}
//             >
//               <Button label="Submit" disabled />
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default RegisterPopup;
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './index.scss'
import { Dropdown } from 'primereact/dropdown';
import { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

import { FileUpload } from 'primereact/fileupload';
import { MultiSelect } from 'primereact/multiselect';
import { Toast } from 'primereact/toast';

type registerProps = {
  visible: any;
  setVisible: any;
};
const RegisterPopup: React.FC<registerProps> = ({ visible, setVisible }) => {
    const toast = useRef(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProject, setSelectedProject] = useState('HRMS');
    const [selectedDate, setSelectedDate] = useState(new Date('2023-05-31'));
    const [selectedEndDate, setSelectedEndDate] = useState(new Date('2023-08-31'));
    const [value, setValue] = useState('Fell sick due to food poisoning');
    const [requestType, setRequestType] = useState('Sick Leave');

    const groupedCities = [
        {
            code: 'DE',
            items: [
                { label: 'Permission', value: 'Permission' },
                { label: 'Sick Leave', value: 'Sick Leave' },
                { label: 'Casual Leave', value: 'Casual Leave' },
                { label: 'Earned Leave', value: 'Earned Leave' },
                { label: 'Comp.Off', value: 'Comp.Off' }
            ]
        },
    ];

    const project = [
        {
            code: 'DE',
            items: [
                { label: 'HRMS', value: 'HRMS' },
            ]
        },
    ];

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

   
    return (
        <div>
            <Dialog header="Create Regularization Request" visible={visible} onHide={()=>setVisible(false)} style={{ width: '40vw' }} className='create__request__header'>
                <div className='register__modal'>
                    <div className="grid">
                        <div className="col-6">
                            <div className='request__type__text'>
                                Request type<span className='required__field'>*</span>
                            </div>
                            <div className='mt-2'>
                                <Dropdown value={'Sick Leave'} onChange={(e) => setRequestType(e.value)} options={groupedCities}
                                    optionGroupLabel="label" optionGroupChildren="items" placeholder="Select" className='request__type__dropdown' />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='request__type__text'>Project<span className='required__field'>*</span></div>
                            <div className='mt-2'>
                                <Dropdown value={selectedProject} onChange={(e) => setSelectedProject(e.value)} options={project}
                                    optionGroupLabel="label" optionGroupChildren="items" className='request__type__dropdown' placeholder="Select" />
                            </div>
                        </div>
                    </div>

                    <div className="grid mt-1">
                        <div className="col-12">
                            <div className='request__type__text'>
                                To<span className='required__field'>*</span>
                            </div>
                            <div className='mt-2'>
                                <MultiSelect value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" display="chip"
                                    placeholder="Select Cities" maxSelectedLabels={3} className='request__type__dropdown' />
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-1">
                        <div className="col-12">
                            <div className='request__type__text'>
                                Description<span className='required__field'>*</span>
                            </div>
                            <div className='mt-2'>
                                <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter' className='description__dropdown' />
                            </div>
                        </div>
                    </div>
                    <div className='button__view__main'>
                        <div className='button__view' >
                            <Button className='button__style' label='Submit' disabled/>
                        </div>
                    </div>
                    
                </div>
              
            </Dialog>
        </div>
    );
};

export default RegisterPopup;
