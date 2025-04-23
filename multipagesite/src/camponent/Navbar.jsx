import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
          <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
    <div className="container">
      <div
        className="row gx-0 align-items-center"
        style={{
          height: "45px",
        }}>
        <div className="col-lg-6 text-center text-lg-start mb-lg-0">
        <div className="d-flex flex-wrap">
            <Link className="text-muted me-4" to="/">
              <i className="fas fa-map-marker-alt text-primary me-2" />
              Find A Location
            </Link>
            <Link className="text-muted me-4" to="tel:+01234567890">
              <i className="fas fa-phone-alt text-primary me-2" />
              +01234567890
            </Link>
            <Link className="text-muted me-0" to="mailto:example@gmail.com">
              <i className="fas fa-envelope text-primary me-2" />
              Example@gmail.com
            </Link>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a
              className="btn btn-light btn-sm-square rounded-circle me-3"
              href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-light btn-sm-square rounded-circle me-3"
              href="#">
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-light btn-sm-square rounded-circle me-3"
              href="#">
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-light btn-sm-square rounded-circle me-0"
              href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand p-0" to="/">
          <h1 className="display-6 text-primary">
            <i className="fas fa-car-alt me-3" />
            Cental
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          data-bs-target="#navbarCollapse"
          data-bs-toggle="collapse"
          type="button">
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
            <Link className="nav-item nav-link" to="/ourcar">
                  Our Cars
                </Link>
            <Link className="nav-item nav-link" to="/contact">
              Contact
            </Link>
          </div>
          <Link className="btn btn-primary rounded-pill py-2 px-4" to="/contact">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  </div>
        </>
    )
}