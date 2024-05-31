import React from 'react';
import './index.scss';
import LeaveDonotChart from './leaveDonotChart'

import { Card } from 'primereact/card';
        

const LeaveCards = () => {
  return (
    <div className='overall__levae__cards'>
        <div className='types__of__leave__card'>
        <Card className='casual__leave__card'>
            <div className='casual__leave__text'>
            Casual leave
            </div>
            <div>
                <LeaveDonotChart color='#0047AB' value={70}/>
            </div>
        </Card>
        <Card className='casual__leave__card'>
            <div className='casual__leave__text'>
            Sick leave
            </div>
            <div>
                <LeaveDonotChart color='#00AB9D' value={70}/>
            </div>
        </Card>
          <Card className='casual__leave__card'>
            <div className='casual__leave__text'>
            Earned leave
            </div>
            <div>
                <LeaveDonotChart color='#AB5600' value={70}/>
            </div>
        </Card>
        <Card className='casual__leave__card'>
            <div className='casual__leave__text'>
            Compensation off
            </div>
            <div>
                <LeaveDonotChart color='#0074AB' value={70}/>
            </div>
        </Card>
        <Card className='casual__leave__card'>
            <div className='casual__leave__text'>
            Loss of Pay
            </div>
            <div>
                <LeaveDonotChart color='#C60000' value={24}/>
            </div>
        </Card>
      
        </div>
    </div>
  );
}

export default LeaveCards;
