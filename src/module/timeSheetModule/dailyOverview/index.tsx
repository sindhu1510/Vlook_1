import { Calendar } from 'primereact/calendar';
import './index.scss'
import SvgCalendar from '../../../assets/icons/SvgCalendar';
import { useRef, useState } from 'react';
import SvgFilter from '../../../assets/icons/SvgFilter';
import DailyViewTable from '../dailyOverview/dailyViewTable'
import WeeklyViewTable from '../dailyOverview/weeklyViewTable';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';

const LeavesOverview = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDates, setSelectedDates] = useState(null);
    const [viewType, setViewType] = useState('daily');
    const toast = useRef<Toast>(null);

  

    const handleViewChange = (type) => {
        setViewType(type);
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: (
                <div className="flex flex-column align-items-center w-full gap-5 surface-border cursor-pointer">
                    <span onClick={() => handleViewChange('daily')}>Daily</span>
                    <span onClick={() => handleViewChange('weekly')}>Weekly</span>
                </div>
            ),
        });
    };

    return (
        <div className='overall__timesheet_overview__layout'>
            <div className='leaves__overview__header__text'>
                Timesheet
            </div>
            <div className='overview__text__and__apply mt-7'>
                <div className='leaves__overview__text'>
                    {viewType === 'daily' ? 'Daily View' : 'Weekly View'}
                </div>
                <div className='calendar__and__filter'>
                    <div className='calendar__field'>
                        <div className='from__text__calendar'>
                            <div>From</div>
                            <Calendar id="buttondisplay" value={selectedDate} onChange={(e) => setSelectedDate(e.value)} showIcon icon={() => <SvgCalendar />} />
                        </div>
                        <div className='from__text__calendar'>
                            <div>To</div>
                            <Calendar id="buttondisplay" value={selectedDates} onChange={(e) => setSelectedDates(e.value)} showIcon icon={() => <SvgCalendar />} />
                        </div>
                    </div>
                </div>
                <Toast ref={toast} />
                <ConfirmPopup />
                <div onClick={confirm1} className='cursor-pointer'>
                    <SvgFilter />
                </div>
            </div>
            <div>
                {viewType === 'daily' ? <DailyViewTable /> : <WeeklyViewTable />} 
            </div>
        </div>
    );
}

export default LeavesOverview;
