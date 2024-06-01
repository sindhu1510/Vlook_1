import React, { useState } from 'react';
import './index.scss'
import { Button } from 'primereact/button';
import SvgUparrowleft from '../../../assets/icons/SvhUparrowLeft';
import SvgUparrowright from '../../../assets/icons/SvgUparrowRight';
import LeaveCards from '../leaveCards';
import Tabview from '../TabView';
import CreateRequestModal from '../leavesOverview/createRequestModal'


const LeavesOverview = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleHide = () => {
    setIsModalVisible(false);
  };

    
  return (
    <div className='overall__leaves_overview__layout'>
      <div className='leaves__overview__header__text'>
      Leaves 
      </div>
      <div className='overview__text__and__apply mt-7'>
        <div className='leaves__overview__text'>
            Overview
        </div>
        <div className='overview__apply__button'>
            <Button label='Apply' onClick={handleClick}/>
        </div>
      </div>
      <div className='overview__leave__Card'>
        <div>
            <SvgUparrowleft/>
        </div>
        <div className='mt-5'>
            <LeaveCards/>
        </div>
        <div>
            <SvgUparrowright/>
        </div>
      </div>
      <div className='mt-3'>
      <Tabview/>
      </div>
      <CreateRequestModal visible={isModalVisible} onHide={handleHide} />
    </div>
  );
}

export default LeavesOverview;
