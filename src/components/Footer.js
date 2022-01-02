import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-white">

            <div className="container-fluid bg-white px-5">
                <div className="row align-items-center bg-white py-3">
                    <div className="col-lg pb-3 bg-white">
                        <div className="col bg-white">
                            <ul className="list-group list-group-flush text-center">
                                <li className="bg-white list-group-item"><Link className="text-dark">About</Link></li>
                                <li className="bg-white list-group-item"><Link className="text-dark">Contact</Link></li>
                                <li className="bg-white list-group-item"><Link className="text-dark">Locations</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg text-center pt-3 bg-white">
                        <form>
                            <h3>Would you like to sell something to us?</h3>
                            <div class="w-75 mx-auto bg-white form-floating mb-3">
                                <input type="email" class="mb-2 form-control form-control-sm" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                                <button className="btn btn-outline-dark">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 text-center pt-2 pb-1 bg-white container">
                        <div className="row p-2 bg-white">
                            <div className="col bg-white"><Link><i class="social-icon-instagram social-icon bi bi-instagram fs-1"></i></Link></div>
                            <div className="col bg-white"><Link><i class="social-icon-youtube social-icon bi bi-youtube fs-1"></i></Link></div>
                            <div className="col bg-white"><Link><i class="social-icon-twitter social-icon bi bi-twitter fs-1"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>



        </footer>


    )
}

export default Footer;
