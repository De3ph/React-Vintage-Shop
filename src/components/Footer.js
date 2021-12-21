import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer mt-3 bg-light">
            {/* <div className="py-5 container-fluid align-content-center bg-light">
                <div className="row">
                    <div className="col bg-light"></div>
                    <div className="col bg-light">
                        <div className="container py-3 bg-light justify-content-center">
                            <div className="row mx-auto w-100 bg-light">
                            Do you have a piece for us?
                            </div>
                            <div className="row mb-1">
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div className="row mb-1">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="row w-50 mb-1 mx-auto">
                                <button className='btn btn-outline-dark' type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-light">dsaasd</div>
                <div className="row bg-light">asdweq</div>
            </div> */}

            <div className="container-fluid bg-light px-5">
                <div className="row align-items-center bg-light py-3">
                    <div className="col-lg pb-3 bg-light">
                        <div className="col bg-light">
                            <ul className="list-group list-group-flush text-center">
                                <li className="bg-light list-group-item"><Link className="text-dark">About</Link></li>
                                <li className="bg-light list-group-item"><Link className="text-dark">Contact</Link></li>
                                <li className="bg-light list-group-item"><Link className="text-dark">Locations</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg text-center pt-3 bg-light">
                        <form>
                            <h3>Would you like to sell something to us?</h3>
                            <div class="w-75 mx-auto bg-light form-floating mb-3">
                                <input type="email" class="mb-2 form-control form-control-sm" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                                <button className="btn btn-outline-dark">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 text-center pt-2 pb-1 bg-light container">
                        <div className="row p-2 bg-light">
                            <div className="col bg-light"><Link><i class="social-icon-instagram social-icon bi bi-instagram fs-1"></i></Link></div>
                            <div className="col bg-light"><Link><i class="social-icon-youtube social-icon bi bi-youtube fs-1"></i></Link></div>
                            <div className="col bg-light"><Link><i class="social-icon-twitter social-icon bi bi-twitter fs-1"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>



        </footer>


    )
}

export default Footer;
