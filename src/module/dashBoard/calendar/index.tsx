import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import './index.scss';
import { ScrollPanel } from 'primereact/scrollpanel';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate } from '../../dashBoard/calendar/store/calendarMiddilware';

const CalendarComponent = () => {
    const currentDate = new Date();
    const [date, setDate] = useState<Nullable<Date>>(currentDate);
    const selectedDate = useSelector((state: any) => state.calendar?.selectedDate);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!selectedDate) {
            dispatch(setSelectedDate(currentDate));
        }
    }, [selectedDate, dispatch, currentDate]);

    const handleDateChange = (e: any) => {
        setDate(e.value);
        dispatch(setSelectedDate(e.value));
    };

    const formatDate = (date: Nullable<Date>) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/ ${month}/ ${year}`;
    };
    const highlightDates = ['2024-05-07'];

  const dateTemplate = (dateInfo) => {
    const formattedDate = dateInfo.day.toString().padStart(2, '0');
    const month = (dateInfo.month + 1).toString().padStart(2, '0');
    const year = dateInfo.year.toString();
    const fullDate = `${year}-${month}-${formattedDate}`;
    const isHighlighted = highlightDates.includes(fullDate);

    const isCustomLabel = dateInfo.day === 7;
    const isSelectedDate = date && new Date(date).getDate() === dateInfo.day &&
        new Date(date).getMonth() === dateInfo.month &&
        new Date(date).getFullYear() === dateInfo.year;

    return (
        <div className="date-container">
            <div className={`custom-date ${isHighlighted ? 'highlight' : ''}`}>
                {isCustomLabel ? (
                    <div className="cl-circle">
                        CL
                        {isHighlighted && <div className="red-dot"></div>}
                    </div>
                ) : (
                    <div className="regular-date">{dateInfo.day}</div>
                )}
            </div>
            {isSelectedDate && <div className="blue-dot"></div>}
        </div>
    );
};

    
    
    
  

    return (
        <div className='calendar__layout'>
            <Card className='dashboard__calendar__style'>
                <div className='date__time__text'>
                    <div className='calendar__text'>Calendar</div>
                    <div className='dashboard__date__text'>
                        {selectedDate && <div className='calendar__date__text'>{new Date(selectedDate).toLocaleDateString()}</div>}
                    </div>
                </div>
                <div className='calendar__attendance__text'>
                    <div className='calendar__flex__style mt-4'>
                        <Card>
                            <Calendar value={date} onChange={handleDateChange} inline style={{ height: '400px' }} dateTemplate={dateTemplate} />
                        </Card>
                    </div>
                    <div className='calendar__flex__style mt-4'>
                        <Card style={{ height: "27.3rem" }}>
                            <div className='calendar__text'>Attendance</div>
                            <div className='date__time__text mt-3'>
                                <div className='calendar__date__text'>
                                    {formatDate(date)}
                                </div>
                                <div className='calendar__time__text'>
                                    06 : 00 : 00 hrs
                                </div>
                            </div>
                            <ScrollPanel style={{ height: '320px' }} className='mt-3'>
                                <div className='swipein__and__hours__text mt-3'>
                                    <div>
                                        <div className='swipein__text'>
                                            Swipe in- 10.00 AM
                                        </div>
                                        <div className='swipein__text mt-3'>
                                            Swipe out- 13.00 PM
                                        </div>
                                    </div>
                                    <div className='calendar__hrs__text'>
                                        3 hrs
                                    </div>
                                </div>

                                <div className='swipein__and__hours__text mt-3'>
                                    <div>
                                        <div className='swipein__text'>
                                            Swipe in- 10.00 AM
                                        </div>
                                        <div className='swipein__text mt-3'>
                                            Swipe out- 13.00 PM
                                        </div>
                                    </div>
                                    <div className='calendar__hrs__text'>
                                        3 hrs
                                    </div>
                                </div>
                                <div className='swipein__and__hours__text mt-3'>
                                    <div>
                                        <div className='swipein__text'>
                                            Swipe in- 10.00 AM
                                        </div>
                                        <div className='swipein__text mt-3'>
                                            Swipe out- 13.00 PM
                                        </div>
                                    </div>
                                    <div className='calendar__hrs__text'>
                                        2 hrs
                                    </div>
                                </div>
                                <div className='swipein__and__hours__text mt-3'>
                                    <div>
                                        <div className='swipein__text'>
                                            Swipe in- 10.00 AM
                                        </div>
                                        <div className='swipein__text mt-3'>
                                            Swipe out- 13.00 PM
                                        </div>
                                    </div>
                                    <div className='calendar__hrs__text'>
                                        2 hrs
                                    </div>
                                </div>
                            </ScrollPanel>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default CalendarComponent;
