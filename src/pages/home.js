import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import '../assets/css/home.css';

function Home() {

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

  return (
    <div className='container'>
      <div className='progress_bar' style={{width: `${scrollTop}%`}}></div>
      <div className='header'>
        <ul>
          <li onClick={() => scrollToSection(home)} className='link'>
            <h2>Home</h2>
          </li>
          <li onClick={() => scrollToSection(about_me)} className='link'>
            <h2>About me</h2>
          </li>
          <li onClick={() => scrollToSection(projects)} className='link'>
            <h2>Projects</h2>
          </li>
        </ul>
      </div>
      <div ref={home} className='home'>
        <div className='home_content'>
          <h1>Matthijs van Lambalgen</h1>
          <h2>Game developer / Software developer</h2>
        </div>
      </div>
      <div ref={about_me} className='about_me'>
        <div className='about_me_content'>
          <h1>About me</h1>
          <h2>Things about me.</h2>
        </div>
      </div>
      <div ref={projects} className='projects'>
        <div className='projects_content'>
          <h1>Projects</h1>
          <h2>Check out some of the projects I worked on.</h2>
        </div>
        <div className='project_container'>
          <div className='upper'>

          </div>
          <div className='lower'>
            <h2 className='titel'>Student aan huis</h2>
            <h2 className='text'>.</h2>
          </div>
        </div>
        <div className='project_container'>
          <div className='upper'>

          </div>
          <div className='lower'>
            <h2 className='titel'>Portfolio</h2>
            <h2 className='text'>.</h2>
          </div>
        </div> 
        <div className='project_container'>
          <div className='upper'>

          </div>
          <div className='lower'>
            <h2 className='titel'>Jan de kapper</h2>
            <h2 className='text'>.</h2>
          </div>
        </div>   
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default Home;
