
function Footer() {
    return (
      <footer className="page-footer teal darken-3">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} All rights saved
            <a className="grey-text text-lighten-4 right" href="https://github.com/Mo-salakh" target="_blank" rel="noreferrer"> 
              Git
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export { Footer };