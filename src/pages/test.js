import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import '../assets/css/test.css';
import Popup from '../components/Popup';
import Popup1 from '../components/Popup1';

function Test() {

  /* Progress bar */

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Header */

  const home = useRef(null);
  const about_me = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  /* Popup */

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);

  return (
    <div>
      <div className='progress_bar' style={{width: `${scrollTop}%`}}></div>
      <div className='header'>
        <ul>
          <li onClick={() => scrollToSection(home)} className='link'>
            <h3>Home</h3>
          </li>
          <li onClick={() => scrollToSection(about_me)} className='link'>
            <h3>About me</h3>
          </li>
          <li onClick={() => scrollToSection(projects)} className='link'>
            <h3>Projects</h3>
          </li>
        </ul>
      </div>
      <div className='container'>
        <div ref={home} className='home'>
          <div className='home_content'>
            <div className='home_picture'></div>
            <h1>Matthijs van Lambalgen</h1>
            <h2>Game developer / Software developer</h2>
          </div>
        </div>
        <div ref={about_me} className='about_me'>
          <div className='about_me_content'>
            <h1>About me</h1>
            <h2 className='about_me_text'>My name is Matthijs van Lambalgen. 22 years old and from the Netherlands. I am someone who works best in a group. I have a lot of passion for my field and am therefore always curious to learn new things. My goal is to eventually start working somewhere as a product owner and hope to be able to specialize more in this over time.</h2>
          </div>
          <div className='about_me_image'></div>
        </div>
        <div ref={projects} className='projects'>
          <div className='projects_content'>
            <h1>Projects</h1>
            <h2 className='projects_text'>These are the most recent projects I've worked on. Go check it out!</h2>
          </div>
          <div className='project_container'>
            <div className='upper'></div>
            <div className='lower'>
              <h2 className='titel'>Student aan huis</h2>
              <h3 className='text'>This is a dashboard that we have built for Student aan huis. We built this project using React and DynamoDB. In this project I worked on the front end and I was the scrum master.</h3>
              <h4 className='more' onClick={() => setButtonPopup1(true)}>Read more</h4>
            </div>
          </div>
          <div className='project_container1'>
            <div className='upper1'></div>
            <div className='lower'>
              <h2 className='titel'>Jan de kapper</h2>
              <h3 className='text'>In this project we worked for a fictional hairdresser who wanted a website and dashboard. We built this in React. In this project I worked on the back end and I was the scrum master.</h3>
              <h4 className='more' onClick={() => setButtonPopup(true)}>Read more</h4>
            </div>
          </div> 
          <div className='project_container2'>
            <div className='upper2'></div>
            <div className='lower'>
              <h2 className='titel'>Portfolio</h2>
              <h3 className='text'>This is my portfolio website. I built this website in React.</h3>
              <h4 className='more'>Read more</h4>
            </div>
          </div> 
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        <Popup1 trigger={buttonPopup1} setTrigger={setButtonPopup1}></Popup1>
      </div>
    </div>
  );
}

export default Test;