import { Link } from "react-router-dom";

function Footer({bgClass , addToCart}) {

    let emailValue = document.querySelector('#getEmailInput');

    let giveMyEmail = (event)=>{
        emailValue.value = "";
        alert('We just received your sell request. We would like to call you as soon as possible.');
        event.preventDefault();
    }


    return (
        <footer className={"footer ".concat(bgClass)}>

            <div className={"container-fluid px-5 ".concat(bgClass)}>
                <div className={"row align-items-center py-3 ".concat(bgClass)}>
                    <div className={"col-lg pb-3 ".concat(bgClass)}>
                        <div className={"col ".concat(bgClass)}>
                            <ul className="list list-group-flush text-center">
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5" to='/about'>About Us</Link></li>
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5" to='/contact'>Contact</Link></li>
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5" to='/locations'>Locations</Link></li>
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5" to='/giftCard'>Gift Cards</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={"col-lg text-center pt-3".concat(bgClass)}>
                        <form>
                            <h3>Would you like to sell something to us? Send us an email and we will call you.</h3>
                            <div className={"w-75 mx-auto mb-3 ".concat(bgClass)}>
                                <input id="getEmailInput" type="email" className="mb-2 form-control form-control-sm" placeholder="name@example.com" />
                                <button onClick={giveMyEmail} className="btn btn-outline-warning">Send my email</button>
                            </div>
                        </form>
                    </div>
                    <div className={"col-12 text-center pt-2 pb-1 container ".concat(bgClass)}>
                        <div className={"row p-2 ".concat(bgClass)}>
                            <div className={"col ".concat(bgClass)}><Link><i className="social-icon-instagram social-icon bi bi-instagram fs-1"></i></Link></div>
                            <div className={"col ".concat(bgClass)}><Link><i className="social-icon-youtube social-icon bi bi-youtube fs-1"></i></Link></div>
                            <div className={"col ".concat(bgClass)}><Link><i className="social-icon-twitter social-icon bi bi-twitter fs-1"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>



        </footer>


    )
}

export default Footer;
