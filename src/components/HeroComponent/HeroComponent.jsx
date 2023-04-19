import heroImg from "../../assets/img/hero-img.png"

const HeroComponent = () => {

    return (
        <div className="hero d-flex container justify-align-content-between gap-5">
            <div className="heroTitle d-flex flex-column gap-3 justify-content-center">
                <h2><span className="mb-5">Hello,</span><br />I Am Milos Sudimac</h2>
                <h3>Web Developer</h3>
                <p>To work in a challenging environment, which maintains high professional standards, fosters personal growth, provides an opportunity for continuous learning and expects quality results. And to utilize my knowledge and skills in the best possible way for the fulfillment of organizational goals.</p>
                <button className="downloadCv btnColor">DOWNLOAD CV</button>
            </div>
            <div className="heroDiv d-flex align-items-center justify-content-center"><img src={heroImg} alt="" /></div>
        </div>
    )
}

export default HeroComponent;