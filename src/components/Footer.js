import { Link } from "react-router-dom";

function Footer({bgClass}) {
    return (
        <footer className={"footer ".concat(bgClass)}>

            <div className={"container-fluid px-5 ".concat(bgClass)}>
                <div className={"row align-items-center py-3 ".concat(bgClass)}>
                    <div className={"col-lg pb-3 ".concat(bgClass)}>
                        <div className={"col ".concat(bgClass)}>
                            <ul className="list list-group-flush text-center">
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5">About</Link></li>
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5">Contact</Link></li>
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5">Locations</Link></li>
                                <li className={"list-group-item".concat(bgClass)}><Link className="text-white fs-5" to='/GiftCard'>Gift Cards</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={"col-lg text-center pt-3".concat(bgClass)}>
                        <form>
                            <h3>Would you like to sell something to us?</h3>
                            <div className={"w-75 mx-auto form-floating mb-3 ".concat(bgClass)}>
                                <input type="email" className="mb-2 form-control form-control-sm" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                                <button className="btn btn-outline-warning">Send</button>
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
