import React from 'react';
import './index.scss';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import SvgNextarrow from '../../assets/icons/SvgNextArrow';
import DoughnutChart from '../dashBoard/doughnutChart';
import BarChart from '../dashBoard/barChart';
import Calendar from '../dashBoard/calendar';
import AnalyticChart from '../dashBoard/analyticChart'
import SvgLeftarrow from '../../assets/icons/SvgLeftArrow';
import SvgRightarrow from '../../assets/icons/SvgRightArrow';
import { ScrollPanel } from 'primereact/scrollpanel';
// import { SvgNextarrow } from './SvgNextarrow';


const Dashboard = () => {
    return (
        <div className='overall__sidebar__dashboard__layout'>
            <div className='sidebar__layout'>
                Sidebar
            </div>
            <div className='dashboard__flex__layout'>
              
        <div className='dashboard__layout'>
            <div className='dashboard__text'>
                Dashboard
            </div>
            <div className='overall__task__status__card'>
                <div className='dashboard__date__And__time__card'>
                    <Card className='dashboard__first__card__style'>
                        <div className='dashboard__text__card'>
                            Good morning
                        </div>
                        <div className='date__time__text mt-3'>
                            <div className='dashboard__date__text'>
                                04 April 2024
                            </div>
                            <div className='dashboard__date__text'>
                                00 : 00 : 00
                            </div>
                        </div>
                        <div className='dashboard__general__shift__text mt-2'>
                            Wednesday | General shift
                        </div>
                        <div className='clockin__button__text mt-4'>
                            <Button label='Clock-in' className='clockin__button' />
                        </div>
                    </Card>
                    {/* <Card className='dashboard__card__upcomming__style mt-5'>

                        <div className='date__time__text mt-2'>
                            <div className='upcomming__holidays__text'>
                                Upcoming holidays
                            </div>
                            <div className='dashboard__date__text'>
                                <SvgNextarrow />
                            </div>
                        </div>

                        <div className='dashboard__upcomming__holiday__card mt-3'>
                            <div>
                                <div className='task__ramadan__text'>Ramadan</div>
                                <div className='task__description__text mt-2'>April 11, Thursday</div>
                            </div>
                            <div className='upcomming__apply__text'>
                                Apply
                            </div>


                        </div>
                        <div className='dashboard__upcomming__holiday__card mt-2'>
                            <div>
                                <div className='task__ramadan__text'>Tamil New Year</div>
                                <div className='task__description__text mt-2'>April 14, Thursday</div>
                            </div>
                            <div className='upcomming__apply__text'>
                                Apply
                            </div>


                        </div>
                        <div className='dashboard__upcomming__holiday__card mt-2'>
                            <div>
                                <div className='task__ramadan__text'>Worker's Day</div>
                                <div className='task__description__text mt-2'>May 1, Wednesday</div>
                            </div>
                            <div className='upcomming__apply__text'>
                                Apply
                            </div>


                        </div>

                    </Card> */}
                     <Card className='dashboard__card__upcomming__style mt-4'>
            <div className='date__time__text mt-2'>
                <div className='upcomming__holidays__text'>
                    Upcoming holidays
                </div>
                <div className='dashboard__date__text'>
                    <SvgNextarrow />
                </div>
                
            </div>

            <ScrollPanel style={{ height: '200px' }} className='mt-3'>
                <div className='dashboard__upcomming__holiday__card'>
                    <div>
                        <div className='task__ramadan__text'>Ramadan</div>
                        <div className='task__description__text mt-2'>April 11, Thursday</div>
                    </div>
                    <div className='upcomming__apply__text'>
                        Apply
                    </div>
                </div>
                <div className='dashboard__upcomming__holiday__card mt-2'>
                    <div>
                        <div className='task__ramadan__text'>Tamil New Year</div>
                        <div className='task__description__text mt-2'>April 14, Thursday</div>
                    </div>
                    <div className='upcomming__apply__text'>
                        Apply
                    </div>
                </div>
                <div className='dashboard__upcomming__holiday__card mt-2'>
                    <div>
                        <div className='task__ramadan__text'>Worker's Day</div>
                        <div className='task__description__text mt-2'>May 1, Wednesday</div>
                    </div>
                    <div className='upcomming__apply__text'>
                        Apply
                    </div>
                </div>
            </ScrollPanel>
        </Card>
                </div>

                <div className='dashboard__today__task__card'>
                    <Card className='dashboard__card__todaytask__style'>

                        <div className='date__time__text'>
                            <div className='upcomming__holidays__text'>
                                Today's Task
                            </div>
                            <div className='dashboard__date__text'>
                                <SvgNextarrow />
                            </div>
                        </div>
                        <ScrollPanel style={{ height: '400px' }} className='mt-3'>
                        <div className='dashboard__today__task__type__card mt-3'>
                            <div className='task__type__text'>Task type</div>
                            <div className='task__description__text mt-2'>Task Description</div>
                        </div>
                        <div className='dashboard__today__task__type__card mt-2'>
                            <div className='task__type__text'>Task type</div>
                            <div className='task__description__text mt-2'>Task Description</div>
                        </div>
                        <div className='dashboard__today__task__type__card mt-2'>
                            <div className='task__type__text'>Task type</div>
                            <div className='task__description__text mt-2'>Task Description</div>
                        </div>
                        <div className='dashboard__today__task__type__card mt-2'>
                            <div className='task__type__text'>Task type</div>
                            <div className='task__description__text mt-2'>Task Description</div>
                        </div>
                        <div className='dashboard__today__task__type__card mt-2'>
                            <div className='task__type__text'>Task type</div>
                            <div className='task__description__text mt-2'>Task Description</div>
                        </div>
                        <div className='dashboard__today__task__type__card mt-2'>
                            <div className='task__type__text'>Task type</div>
                            <div className='task__description__text mt-2'>Task Description</div>
                        </div>
                        </ScrollPanel>
                    </Card>
                </div>
                <div className='dashboard__pending__task__card'>
                    <Card className='pending__task__card__style'>
                        <div className='date__time__text'>
                            <div className='upcomming__holidays__text'>
                                Pending Tasks
                            </div>
                            <div className='dashboard__date__text'>
                                <SvgNextarrow />
                            </div>
                        </div>
                        <div>
                            <DoughnutChart />
                        </div>
                    </Card>
                    <Card className='dashboard__over__due__style mt-4'>
                        <div className='date__time__text'>
                            <div className='upcomming__holidays__text'>
                              Over due
                            </div>
                            <div className='dashboard__date__text'>
                                <SvgNextarrow />
                            </div>
                          
                        </div>
                        <div className='mt-4'>
                                <BarChart/>
                            </div>
                       
                    </Card>
                </div>
            </div>
            <div className='calendar__analytic__layout'>
                <div className='dashboard__calendar'>
                    <Calendar/>
                 
                </div>
                <div className='dashboard__analytic'>
                    <Card className='dashboard__analytic__card__style'>
                    <div className='calendar__text'>
                        Analytics
                    </div>
                    <div className='analytic__week__text mt-4'>
                       
                        <div>
                            <SvgLeftarrow/>
                        </div>
                        <div className='analytic__week1__text'>Week1</div>
                        <div>
                            <SvgRightarrow/>
                        </div>
                        
                    </div>
                    <div className='mt-5'>
                    <AnalyticChart/>
                    </div>
                      
                    </Card>
                </div>
            </div>
        </div>
        </div>
        </div> 
    );
}

export default Dashboard;
