import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./index.css"

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-content">
                <p className="home-name">Hi am <span className="home-name-span">Muhammad Umair</span></p>
                <h1 className="home-title">UI & UX Designer</h1>
                <p className="home-desc">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="home-btn">Hire Me</button>
            </div>
            <div>
                <img className="home-img" src="https://i.ibb.co/fGbyTr3/979b379ab7f66745a5c557015bf995d5.png" alt="home-img" />
                <div>
                    <FaFacebook className="home-icons" />
                    <FaTwitter className="home-icons" />
                    <FaLinkedin className="home-icons" />
                    <FaInstagram className="home-icons" />
                </div>
            </div>
        </div>
    )
}

export default Home