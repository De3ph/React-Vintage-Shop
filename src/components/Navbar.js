import { Link } from "react-router-dom";

function Navbar(props) {
  const links = props.links;

  return (
    
    <nav class="navbar navbar-expand-lg bg-transparent mb-2">
      <div class="container-fluid">
        <Link to='/' className="navbar-brand" style={{color:'black'}}> <h1 className="display-1">Old'<em>n</em>'Gold</h1> </Link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav w-100 justify-content-evenly">
            {links.map((link) => {
              return <Link className="py-2 my-1 fs-4" style={{textDecoration : 'none' , color:'black'}} to={link.to} key={link.to}>{link.content}</Link>
            })}
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;