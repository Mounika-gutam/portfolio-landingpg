import NavBar from "../NavBar"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Services from "../../pages/Services"
import MyProjects from "../../pages/MyProjects"
import Testimonials from "../../pages/Testimonals"
import Contact from "../../pages/Contact"
import "./index.css"

const HomePage = () => {
    return(
        <div className="home-page-bg-container">
            <NavBar />
            <Home />
            <About />
            <Services />
            <MyProjects />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default HomePage