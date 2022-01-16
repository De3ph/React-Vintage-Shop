import { Link } from "react-router-dom";

function Navbar({ links, removeFunc }) {

  let click = () => {

  }

  return (

    <nav>

      <div className="main-navbar container-fluid rounded">

        <div className="row py-1">
          <Link to='/' className="navbar-brand" style={{ color: 'white' }}> <h1 className="display-1 mt-5 main-title-font text-center animate__animated animate__fadeInUp"> <p className="text-warning">Gold's </p>Vintage Shop</h1> </Link>
        </div>
        <div className="row py-1 mt-4">
          <nav className="navbar navbar-expand-lg bg-transparent mb-2">
            <div className="container-fluid justify-content-center pb-2 mb-1">
              <button onClick={click} className="navbar-toggler text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list fs-3 text-white"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="row navbar-nav w-100 justify-content-evenly align-items-center mt-2 mx-auto">
                  {links.map((link) => {
                    return <Link className="col text-center py-2 my-1 fs-4 make-large link-text" to={link.to} onClick={removeFunc} key={link.to}>{link.content} </Link>
                  })}
                </div>
              </div>
            </div>
          </nav>
        </div>

      </div>

    </nav>



  );
}

export default Navbar;