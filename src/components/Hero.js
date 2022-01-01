const Hero = ({image_link, description_title, description_text})=>{
    return ( 
        <div className="Hero section">
            <div className="container extend-container border border-4 p-5">
                <div className="row">
                    <div className="col-md-8 col-sm-12 d-flex align-items-center">
                        <img src={image_link} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="col-sm-12 h-25 d-flex align-items-center">
                            <h2>
                                {description_title}
                            </h2>
                        </div>
                        <div className="col h-75">
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
