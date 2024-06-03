import { Calendar } from 'primereact/calendar';
import './index.scss'
import SvgCalendar from '../../../assets/icons/SvgCalendar';
import { useState } from 'react';
import SvgFilter from '../../../assets/icons/SvgFilter';
import DailyViewTable from '../dailyOverview/dailyViewTable'


const LeavesOverview = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDates, setSelectedDates] = useState(null);


    return (
        <div className='overall__timesheet_overview__layout'>
            <div className='leaves__overview__header__text'>
                Timesheet
            </div>
            <div className='overview__text__and__apply mt-7'>
                <div className='leaves__overview__text'>
                    Daily View
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
            <div>
                <SvgFilter/>
            </div>
            </div>
            <div>
    <DailyViewTable/>
</div>
            <div>
                
            </div>

        </div>
    );
}

export default LeavesOverview;
