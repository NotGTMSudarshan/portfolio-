import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css'

const Projects = () => {
    return (
        <>
        <div>
        <Navbar />
        </div>
        <section className='section'>
        <div className='divs'>
            <h2 className='heading'>Projects</h2>
            <hr/>
            <p className='projects'>Projects that i've been working on:</p>
        </div>
        <div>
            <h1><li>Personal Portfolio:</li></h1>
            <p>Offical Personal Portfolio of GTMSudarshan</p>
            <p>
                <a href='https://www.sudarshan.gautam.np' rel='noreferrer' target='_blank' className='atag'>Demo</a>
                 |            
                <a href='https://www.google.com' rel='noreferrer' target='_blank' className='atag'>Preview</a>
            </p>
        </div>
        <div>
        <h1><li>Project Halloween</li></h1>
        <p>Official Discord Bot made for Neppixel Community</p>
            <a href='https://www.google.com' rel='noreferrer' target='_blank' className='atag'>Demo</a>
            |
            <a href='https://www.google.com' rel='noreferrer' target='_blank' className='atag'>Preview</a>
        </div>
        <p className='h3'>More Projects Coming soon</p>
        <p className='h3'>These projects are listed depending on GitHub Pins at <a className='atag2' rel='noreferrer' href='https://www.github.com/gtmsudarshan' target='_blank'>My GitHub Profile.</a> </p>
        </section>
        </>
    );
}

export default Projects;
