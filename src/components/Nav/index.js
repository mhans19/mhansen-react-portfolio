import React from 'react';

function Nav() {

return (
    <div class="sidebar">
        <h2>MORGAN HANSEN</h2>
        <ul>
            <li>
                <a href="#about">
                    <img src="https://img.icons8.com/pastel-glyph/34/000000/person-male.png"/>
                    <p>About</p>
                </a>
            </li>
            <li>
                <a href="#experience">
                    <img src="https://img.icons8.com/ios/32/000000/briefcase.png"/>
                    <p>Experience</p>
                </a>
            </li>
            <li>
                <a href="#education">
                    <img src="https://img.icons8.com/ios/40/000000/graduation-cap.png"/>
                    <p>Education</p>
                </a>
            </li>
            <li>
                <a href="#projects">
                    <img src="https://img.icons8.com/carbon-copy/48/000000/details.png"/>
                    <p>Projects</p>
                </a>
            </li>
            <li>
                <a href="#contact">
                    <img src="https://img.icons8.com/carbon-copy/48/000000/envelope-dots.png"/>
                    <p>Contact</p>
                </a>
            </li>
        </ul> 
        <div class="social_media">
            <a href="https://github.com/mhans19?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/material-outlined/38/000000/github.png"/>
            </a>
            <a href="https://www.linkedin.com/in/morgan-hansen-47235872/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/metro/32/000000/linkedin.png"/>
            </a>
        </div>
    </div>
);
}

export default Nav;