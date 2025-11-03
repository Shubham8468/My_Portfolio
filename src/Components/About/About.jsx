import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/india.jpg'
const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-titel">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I’m a frontend developer skilled in React, JavaScript, HTML, and CSS. I have a strong foundation in Java and DSA, which helps me write clean and efficient code. I’m always eager to learn and grow as a developer while building modern web applications.</p>
                        <p>My goal is to grow as a full-stack developer by combining my frontend expertise with backend and cloud technologies. I enjoy solving challenging problems, optimizing performance, and creating applications that deliver a smooth user experience. I’m constantly exploring ways to integrate my knowledge of React, Java, and AWS to build complete end-to-end solutions.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>
                                JavaScript
                            </p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Bootstrap</p>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p>
                            <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                            <p>DSA</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p>
                            <hr style={{ width: "60%" }} />
                        </div>

                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>
                        6+
                    </h1>
                    <p>
                        MONTHES OF EXPERIENCE
                    </p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>
                        10+
                    </h1>
                    <p>
                        PROJECTS COMPLETED
                    </p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>
                        8+
                    </h1>
                    <p>
                        CERTIFICATES
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About