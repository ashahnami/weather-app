import React from 'react';

import '../assets/daily.css';

function Daily() {
  return (
    <div className='daily'>
        <div className='row'>
            <div className='day'>Mon</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>

        <div className='row'>
            <div className='day'>Tue</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>

        <div className='row'>
            <div className='day'>Wed</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>

        <div className='row'>
            <div className='day'>Thu</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>

        <div className='row'>
            <div className='day'>Fri</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>

        <div className='row'>
            <div className='day'>Sat</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>

        <div className='row'>
            <div className='day'>Sun</div>
            <div className='icon'>icon</div>
            <div className='temperature'>5°</div>
        </div>
    </div>
  )
}

export default Daily;
