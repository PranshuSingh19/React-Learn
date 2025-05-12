import { Link } from "react-router-dom";

function Footer(){

    return(
        <>
    <div className="footer">
      <div className="container">
        <div className="row footer-inner">
          <div className="col-lg-3">
            <div className="widget mb-4">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae aliquam quia beatae necessitatibus omnis nisi, maxime tempora neque et!</p>
            </div>
          </div>
          <div className="col-lg-2 pl-4">
            <div className="widget mb-4">
              <h3>Navigation</h3>
              <ul className="list-unstyled links">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Training</Link></li>
                <li><Link href="#">Player</Link></li>
                <li><Link href="#">Events</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget mb-4">
              <h3>Upcoming Match</h3>
              <ul className="list-unstyled links">
                <li>
                  <Link href="#">
                    <span className="d-block">May 19, 2020</span>
                    SportsTeam vs. LaLegua
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="d-block">May 19, 2020</span>
                    SportsTeam vs. LaLegua
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="d-block">May 19, 2020</span>
                    SportsTeam vs. LaLegua
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget mb-4">
              <h3>Social</h3>
              <ul className="list-unstyled social">
                <li><Link href="#"><span className="mr-2 icon-facebook"></span> Facebook</Link></li>
                <li><Link href="#"><span className="mr-2 icon-twitter"></span> Twitter</Link></li>
                <li><Link href="#"><span className="mr-2 icon-instagram"></span> Instagram</Link></li>
                <li><Link href="#"><span className="mr-2 icon-linkedin"></span> Linkedin</Link></li>
                <li><Link href="#"><span className="mr-2 icon-play"></span> Youtube</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-12 mt-5 text-center copyright">
            <p>
              Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with by <Link href="https://colorlib.com" target="_blank" >Colorlib</Link>
              </p>
          </div>

        </div>
      </div>
    </div >
    
        </>
    )
}
export default Footer;