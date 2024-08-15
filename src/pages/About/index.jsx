import "./index.css"
import ProgressBar from "../ProgressBar"

const About = () => {
    return(
        <div className="about-container">
            <img className="about-img" src="https://i.ibb.co/Q8vTt7v/80f48cd1d9fa0014c092574df5520d15.png" alt="about me" />

            <div className="about-context">
                <h1 className="about-title">About Me</h1>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <div>
                <ProgressBar label="UX" percentage={90} />
                <ProgressBar label="Website Design" percentage={80} />
                <ProgressBar label="App Design" percentage={75} />
                <ProgressBar label="Graphic Design" percentage={85} />
                </div>
            </div>
        </div>
    )
}

export default About