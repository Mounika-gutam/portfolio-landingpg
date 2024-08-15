import "./index.css"

const Testimonials = () => {
    return(
        <div className="testimonials-container">
            <h1 className="testimonials-heading">Testimonials</h1>
            <p className="testimonials-text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

            <div className="testimonials-card">
                <img className="testimonials-img" src="https://i.ibb.co/x75WLfH/baa649092172e33f9b1e0e4eb8df495d.jpg" alt="testimonials" />
                    <div>
                        <p className="testimonials-text2">Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices</p>
                        <h2 className="testimonials-name">Name</h2>
                        <p className="testimonials-role">CEO</p>
                    </div>
            </div>
        </div>
    )
}

export default Testimonials