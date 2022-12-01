import React from 'react';
import './Navbar.css'
    const Navbar = () => {
        return (
            <div>
                <div className='main'>
                    <div className="left">
                    <a href='/' rel='noreferrer'>Sudarshan</a>
                    <button className='mode'>
                        <span></span>
                    </button>
                    </div>
                        <div className='right'>    
                        <ul className='list'>
                        <li>
                            <a href='/' rel='noreferrer'><span>Home</span></a>
                        </li> 
                        <li>
                            <a href='projects' rel='noreferrer'><span>Projects</span></a>
                            
                            </li> 
                        <li><a href='about' rel='noreferrer'><span>About</span></a></li> 
                        </ul>
                    </div>
                </div>
            </div>
);
}   

export default Navbar;
