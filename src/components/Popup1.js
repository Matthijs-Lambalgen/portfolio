import React from 'react';
import './Popup.css';

function Popup1(props) {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popup_inner'>
        <h4 className='close_btn' onClick={() => props.setTrigger(false)}>Close</h4>
        <div className='content'>
          <div className='project'>
            <h1>Student aan huis</h1>
            <h2>This is a dashboard we built for Student at home. They had the problem that they have a lot of data, but do little with it. It is therefore our task to make this data clear. We built this project using React and DynamoDB. In this project I worked on the front-end and was the scrum master. I learned a lot about React, Chartjs and giving sprint reviews to stakeholders. I also learned a lot about working with stakeholders and a corporate identity.</h2>
          </div>
          <div className='image1'>
          </div>
          <div className='team'>
            <h1>Team</h1>
            <h2>Leo Hanhart</h2>
            <h2>Rebal Al-haqash</h2>
            <h2>Jafet Sinke</h2>
            <h2>Job van Esch</h2>
            <h2>Gianluigi Overtoom</h2>
            <h2>Matthijs van Lambalgen</h2>
          </div>
          <div className='link'>
            <h1>Link to the website</h1>
            <a href='https://mannenaanhuis.software/login' target='_blank'><h2>mannenaanhuis.software</h2></a>
          </div>
        </div>
      </div>
    </div>
  ) : '';
}

export default Popup1