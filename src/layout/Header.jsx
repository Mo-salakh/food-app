import { Link } from "react-router-dom";

function Header() {
    return (
      <>
        <nav className="pink darken-4">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              React Shop
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <a className="grey-text text-lighten-4 right" href="https://github.com/Mo-salakh" target="_blank" rel="noreferrer"> 
                Git
              </a>
            </ul>
          </div>
        </nav>
      </>
    );
  }
  
  export { Header };