import { Link } from "react-router-dom";

function Navbar(){

    return(

        <>
  
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>

    <div className="container">

      <div className="row no-gutters site-navbar align-items-center py-3">

        <div className="col-6 col-lg-2 site-logo">
          <Link href="index.html">SportsTeam</Link>
        </div>
        <div className="col-6 col-lg-10 text-right menu">
          <nav className="site-navigation text-right text-md-right">

              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="active">
                  <Link href="index.html">Home</Link>
                </li>
                <li><Link href="gallery.html">Gallery</Link></li>
                <li className="has-children">
                  <Link href="players.html">Players</Link>
                  <ul className="dropdown arrow-top">
                    <li><Link href="#">Jakub Bates</Link></li>
                    <li><Link href="#">Russell Vance</Link></li>
                    <li><Link href="#">Carson Hodgson</Link></li>
                    <li className="has-children">
                      <Link href="#">Sub Menu</Link>
                      <ul className="dropdown">
                        <li><Link href="#">Joshua Fugueroa</Link></li>
                        <li><Link href="#">Jakub Bates</Link></li>
                        <li><Link href="#">Russell Vance</Link></li>
                        <li><Link href="#">Carson Hodgson</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link href="events.html">Events</Link></li>
                <li><Link href="about.html">About</Link></li>
                <li><Link href="contact.html">Contact</Link></li>
              </ul>

              <Link href="#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></Link>
            </nav>
        </div>
      </div>

    </div>
    
        </>
    )
}
export default Navbar;