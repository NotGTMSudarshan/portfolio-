import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <>
        <Navbar />
        <div className='section'>
            <div className='divs'>
            <h2 className='heading'>About Me</h2>
            <img className='image' src="https://cdn.discordapp.com/avatars/557280521835642880/59f048b75f9fcd5643f3406eea5dabab.png?size=512" alt="alternatetext"></img>
            <hr/>
            </div>
            <p className='aboutme'>
            Hello, my name is <b>Sudarshan Gautam</b>. Usually called <b>GTMSudarshan</b>
            (at the internet). Born in <a className='atag2' rel='noreferrer' href='https://www.google.com/maps/place/%E0%A4%AA%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A5%80%E0%A4%AA%E0%A5%81%E0%A4%B0/@27.1129945,85.657338,12z/data=!3m1!4b1!4m5!3m4!1s0x39eb878be700f00d:0x3ad76d5c89f323de!8m2!3d27.1208017!4d85.735897' target='_blank'><b>Sarlahi, Parwanipur, Nepal</b>.</a> 
             Currently Living in Makalbari, Kathmandu. 
            </p>
            <br></br>
            <p className='aboutme' >
            I am a self-taught programmer who is currently a student. I've sailed into the world of programming 
            around 3 years ago, when i found a user named <b><a className='atag2' rel='noreferrer' href='https://www.github.com/birajrai'>Neppixel.</a></b>
            Currently i am learning React and planning to move into BackEnd ASP. 
            </p>
            <br/>
            <h3 className='aboutme'>346436353230366336393662363532303533366636653639373936313230353236313639 <p className='atag2'>16</p></h3>
            <br/>
            <hr style={{margin:'-20px 0px 0px'}}/>
            <div>
                <h2>
                Skills:
                </h2>
                </div>
                <div className='leftwrapper1'>
                <h3 className='ends'>
                    Languages:                    
                </h3>
                    <ul className='unor'>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                    <br/>
                </div>
            <div className='leftwrapper2'>
                <h3 className='ends2'>
                Backend:
            </h3>
            <ul className='unor'>
                <li>Nodejs</li>
                <li>MySQL</li>
                <li>PHP</li>
            </ul>
            </div>
            <div className='rightwrapper1'>
                <p>
                    Front End
                </p>
                <ul className='unor'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BootStrab</li>
                    <li>js</li>
                </ul>
            </div>
            <br/>
            <p> You can reach me out via email at <span className='atag'>realgtm2062@gmail.com</span> or via <a className='atag' rel='noreferrer' target='_blank' href='https://discord.gg/xMDmJcpypd'> Discord</a>;)</p>
           </div>
        </>
    );
}

export default About;
