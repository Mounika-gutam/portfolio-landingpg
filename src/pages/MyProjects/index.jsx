import "./index.css"

const MyProjects = () => {
    return(
        <div className="projects-container">
            <h1 className="project-title">My Projects</h1>
            <p className="project-description">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
            
            <div>
                <button className="btn">All</button>
                <button className="btn">UI&UX</button>
                <button className="active-btn">Web Design</button>
                <button className="btn">App Design</button>
                <button className="btn">Graphic Design</button>
            </div>

            <ul className="projects-list">
                <li className="project-item">
                    <img className="project-img" src="https://i.ibb.co/4pmsNvb/466e1911ebe5383b65f5e9a7095f7e2c.png" alt="project" />
                    <h2 className="project-item-title">Web Design</h2>
                    <p className="project-item-description">AirCalling Landing Page Design </p>
                </li>

                <li className="project-item">
                    <img className="project-img" src="https://i.ibb.co/Y7dK5t3/c7e4761db8fcbee96701dabc95083a4d.png" alt="project" />
                    <h2 className="project-item-title">Web Design</h2>
                    <p className="project-item-description">Business Landing Page Design</p>
                </li>

                <li className="project-item">
                    <img className="project-img" src="https://i.ibb.co/9ZsvtVv/af2fb38ce2fa59072d26b09da15537ed.png" alt="project" />
                    <h2 className="project-item-title">Web Design</h2>
                    <p className="project-item-description">Ecom Web Page Design</p>
                </li>
            </ul>
        </div>
    )
}

export default MyProjects;