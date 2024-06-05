import { Card } from 'primereact/card';
import './index.scss'
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ScrollPanel } from 'primereact/scrollpanel';

const TeamLeavesCards = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    return (
        <div className='leavelist__and__upcommingdays'>
            <div className='grid'>
                <div className='col-6'>
                    <Card className='leave__list__card__style'>
                        <div className='leave__list__and__dropdown'>
                            <div className='leave__list__text'>Leave List</div>
                            <div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Select a City" className="w-full md:w-14rem" />

                            </div>
                        </div>
                        <ScrollPanel style={{ height: '300px' }}>
                            <div className='mt-3'>
                                <Card>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                        <div>
                                            <div className='sick__leave'>
                                                Sick Leave
                                            </div>
                                            <div className='days__text mt-2'>
                                                2days
                                            </div>
                                        </div>

                                    </div>
                                </Card>

                            </div>
                            <div className='mt-1'>
                                <Card>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className='jane__and__sick__text'>
                                            <div>
                                                <img src="https://i.ibb.co/xzPfMTK/leaveimage2.png" alt="leaveimage2" />
                                            </div>
                                            <div>
                                                <div className='jane__cooper__text'>
                                                Jacques Babcock
                                                </div >
                                                <div className='designer__text mt-2'>
                                                Junior front-end Developer
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <div className='sick__leave'>
                                                Casual Leave
                                            </div>
                                            <div className='days__text mt-2'>
                                                2days
                                            </div>
                                        </div>

                                    </div>
                                </Card>

                            </div>
                            <div className='mt-1'>
                                <Card>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className='jane__and__sick__text'>
                                            <div>
                                                <img src="https://i.ibb.co/VmTpr1M/leaveimage3.png" alt="leaveimage3" />
                                            </div>
                                            <div>
                                                <div className='jane__cooper__text'>
                                                Jacob Jones
                                                </div >
                                                <div className='designer__text mt-2'>
                                                Developer
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <div className='sick__leave'>
                                                Permission
                                            </div>
                                            <div className='days__text mt-2'>
                                                2days
                                            </div>
                                        </div>

                                    </div>
                                </Card>

                            </div>
                            <div className='mt-1'>
                                <Card>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                        <div>
                                            <div className='sick__leave'>
                                                Sick Leave
                                            </div>
                                            <div className='days__text mt-2'>
                                                2days
                                            </div>
                                        </div>

                                    </div>
                                </Card>

                            </div>
                        </ScrollPanel>
                    </Card>

                </div>
                <div className='col-6'>
                    <Card>
                        <div className='leave__list__and__dropdown'>
                            <div className='leave__list__text'>Upcoming holidays</div>
                            <div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Select a City" className="w-full md:w-14rem" />

                            </div>
                        </div>
                        <ScrollPanel style={{ height: '316px' }}>
                        <Card className='upcomming__holidays mt-3'>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='jane__and__sick__text'>

                                    <div>
                                        <div className='jane__cooper__text'>
                                            Ramadan
                                        </div >
                                        <div className='designer__text mt-2'>
                                            April 11, Thursday
                                        </div>
                                    </div>

                                </div>
                                <div>

                                    <div className='apply__text mt-2'>
                                        Apply
                                    </div>
                                </div>

                            </div>
                        </Card>
                        <Card className='upcomming__holidays mt-1'>

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className='jane__and__sick__text'>

        <div>
            <div className='jane__cooper__text'>
            Tamil New Year
            </div >
            <div className='designer__text mt-2'>
            April 14, Thursday
            </div>
        </div>

    </div>
    <div>

        <div className='apply__text mt-2'>
            Apply
        </div>
    </div>

</div>
</Card>
<Card className='upcomming__holidays mt-1'>

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className='jane__and__sick__text'>

        <div>
            <div className='jane__cooper__text'>
            Worker’s Day
            </div >
            <div className='designer__text mt-2'>
            May 1, Wednesday
            </div>
        </div>

    </div>
    <div>

        <div className='apply__text mt-2'>
            Apply
        </div>
    </div>

</div>
</Card>
<Card className='upcomming__holidays mt-1'>

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className='jane__and__sick__text'>

        <div>
            <div className='jane__cooper__text'>
                Ramadan
            </div >
            <div className='designer__text mt-2'>
                April 11, Thursday
            </div>
        </div>

    </div>
    <div>

        <div className='apply__text mt-2'>
            Apply
        </div>
    </div>

</div>
</Card>
</ScrollPanel>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default TeamLeavesCards;
