import React from 'react'
import './MyResume.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import resume from '../../assets/Resume.jpg'
function MyResume() {
    return (
        <div id="MyResume" className="my-resume">
            <div className="my-resume-title">
                <h1>
                    My Resume
                </h1>
                <img src={theme_pattern} alt="" />
            </div>
           
            <div className="my-resume-container">
                <img src={resume} alt="My Resume" />
            </div>
        </div>
    )
}

export default MyResume
