import "./index.css"

const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className="contact-heading">Lets Design Together</h1>
            <p className="contact-text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

            <div className="contact-form">
                <input className="contact-input" type="email" placeholder="Enter Your Email" />
                <button className="contact-button">Contact Me</button>
            </div>
        </div>
    )
}

export default Contact;