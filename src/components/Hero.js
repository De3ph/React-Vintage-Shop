import AnimatedImage from "./AnimatedImg";

const Hero = ({ image_link, description_title, description_text }) => {

    let width = '100%';

    return (
        <div className="Hero section px-3">
            <div className="container extend-container p-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 image-container d-flex justify-content-center">
                        <AnimatedImage imageLink={image_link} width={width}></AnimatedImage>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-6 col-sm-12">
                        <div className="col-sm-12 h-25 d-flex align-items-center justify-content-end">
                            <h2 className="display-1">
                                {description_title}
                            </h2>
                        </div>
                        <div className="col-md-5 w-100 h-75 d-flex align-items-center justify-content-end">
                            <p className='hero-text'>
                                {description_text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
