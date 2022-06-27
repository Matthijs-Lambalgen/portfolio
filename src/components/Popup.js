import React from 'react';
import './Popup.css';

function Popup(props) {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popup_inner'>
        <h4 className='close_btn' onClick={() => props.setTrigger(false)}>Close</h4>
        <div className='content'>
          <div className='project'>
            <h1>Jan de kapper</h1>
            <h2>In this project we worked for a fictional hairdresser who wanted a website and dashboard. We built this in React. In this project I worked on the backend. Here we have mainly been working on the dashboard. I also had the role of scrum master. I learned a lot about retrospective sprint planning and daily check ins.</h2>
          </div>
          <div className='image'>
          </div>
          <div className='team'>
            <h1>Team</h1>
            <h2>Yanick Verburg</h2>
            <h2>Leon van de Wardt</h2>
            <h2>Gianluigi Overtoom</h2>
            <h2>Matthijs van Lambalgen</h2>
          </div>
          <div className='link'>
            <h1>Link to the website</h1>
            <a href='https://janskapsalon.nl/' target='_blank'><h2>janskapsalon.nl</h2></a>
          </div>
        </div>
      </div>
    </div>
  ) : '';
}

export default Popup