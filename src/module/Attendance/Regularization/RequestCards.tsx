import React from 'react'

const RequestCards = () => {
  return (
    // <div className='grid m-0'>
      <>
        <div className="col-12 md:col-6 lg:col-6 xl:col-3 request__header">
            <div className="total__request__view shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Total Request</div>
            <div className="total__request">10</div>
          </div>
        </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6 xl:col-3 request__header">
            <div className="total__request__Approved shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Approved Request</div>
            <div className="total__request">6</div>
          </div>
        </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6 xl:col-3 request__header">
            <div className="total__request__Rejected shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Rejected Request</div>
            <div className="total__request">3</div>
          </div>
        </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6 xl:col-3 request__header">
            <div className="total__request__Pending shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Pending</div>
            <div className="total__request">1</div>
          </div>
        </div>
        </div>
      </>
    // </div>
  )
}

export default RequestCards