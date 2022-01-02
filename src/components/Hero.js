import AnimatedImage from "./AnimatedImg";

const Hero = ({image_link, description_title, description_text})=>{

    let width = '60%';

    return ( 
        <div className="Hero section px-3">
            <div className="container extend-container p-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 d-flex justify-content-center">
                        {/* <img src={image_link} alt="" className="img-fluid" width='60%' /> */}
                        <AnimatedImage imageLink={image_link} width={width}></AnimatedImage>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="col-sm-12 h-25 d-flex align-items-center justify-content-end">
                            <h2>
                                {description_title}
                            </h2>
                        </div>
                        <div className="col h-75 d-flex align-items-center justify-content-end">
                            <p className="lead">
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
