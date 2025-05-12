import React from "react";
import { Link } from "react-router-dom";
// CarouselComponent.js
import OwlCarousel from 'react-owl-carousel';

// ✅ Import jQuery and OwlCarousel JS correctly
import $ from 'jquery';
window.$ = $; // expose globally before using OwlCarousel
require('owl.carousel');

// ✅ Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


function HomePage(){


      {/* for slider  */}
    
      const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
      };
    return(
        <>
      
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="hero-wrap" style={{backgroundImage: "url('./assets/images/hero_1.jpg')" }} data-stellar-background-ratio="0.5">
            <div className="hero-contents">
              <h2>Team after Training</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio aliquid dolor odio ullam odit cum veniam fuga aperiam aut.</p>
              <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="col-lg-8 ml-auto">
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
              <div className="custom-media d-flex">
                <div className="img-wrap mr-3">
                  <Link to="#"><img src="./assets/images/img_1.jpg" alt="Image" className="img-fluid"/></Link>
                </div>
                <div>
                  <span className="caption">Latest News</span>
                  <h3><Link to="#">Roman Greg scorer 4 goals</Link></h3>
                  <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
              <div className="custom-media d-flex">
                <div className="img-wrap mr-3">
                  <Link to="#"><img src="./assets/images/img_2.jpg" alt="Image" className="img-fluid"/></Link>
                </div>
                <div>
                  <span className="caption">Team</span>
                  <h3><Link to="#">Line for the upcoming match</Link></h3>
                  <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          
        </div>
      </div>

      <Link to="#"></Link>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="section-title">Our Players</h2>
          </div>
          <div className="col-6 text-right">
            <Link to="#" className="custom-prev js-custom-prev-v2">Prev</Link>
            <span className="mx-2">/</span>
            <Link to="#" className="custom-next js-custom-next-v2">Next</Link>
          </div>
        </div>

        {/* <OwlCarousel  className="owl-4-slider owl-carousel" {...options}> */}
        <OwlCarousel className="owl-4-slider owl-carousel" {...options}>
      <div className="item player">
        <Link to="#"><img src="./assets/images/player_4.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Jakub Bates</h3>
          <p>#10 / Forward</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_1.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Joshua Figueroa</h3>
          <p>#7 / Forward</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_5.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Russell Vance</h3>
          <p>#1 / Goal Keeper</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_3.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Carson Hodgson</h3>
          <p>#3 / Forward</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_4.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Yanis Velasquez</h3>
          <p>#4 / Forward</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_1.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Joshua Figueroa</h3>
          <p>#8 / Forward</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_2.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Russell Vance</h3>
          <p>#6 / Forward</p>
        </div>
      </div>

      <div className="item player">
        <Link to="#"><img src="./assets/images/player_3.jpg" alt="Image" className="img-fluid" /></Link>
        <div className="p-4">
          <h3>Carson Hodgson</h3>
          <p>#9 / Forward</p>
        </div>
      </div>
    </OwlCarousel>
        

      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row align-items-center mb-2">
          <div className="col-6">
            <h2 className="section-title">Team Gallery</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_1.jpg" data-fancybox="gal"><img src="./assets/images/img_1.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_2.jpg" data-fancybox="gal"><img src="./assets/images/img_2.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_3.jpg" data-fancybox="gal"><img src="./assets/images/img_3.jpg" alt="Image" className="img-fluid"/></Link>
          </div>

          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_4.jpg" data-fancybox="gal"><img src="./assets/images/img_4.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_5.jpg" data-fancybox="gal"><img src="./assets/images/img_5.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_1.jpg" data-fancybox="gal"><img src="./assets/images/img_1.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_2.jpg" data-fancybox="gal"><img src="./assets/images/img_2.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="./assets/images/img_3.jpg" data-fancybox="gal"><img src="./assets/images/img_3.jpg" alt="Image" className="img-fluid"/></Link>
          </div>
        </div>
      </div>
    </div>



    <div className="site-section">
      <div className="container">
        <div className="row align-items-center mb-2">
          <div className="col-6">
            <h2 className="section-title">Events</h2>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
            <div className="custom-media d-block">
              <div className="img-wrap mb-3">
                <Link to="#"><img src="./assets/images/img_1.jpg" alt="Image" className="img-fluid"/></Link>
              </div>
              <div>
                <span className="caption">May 19, 2020</span>
                <h3><Link to="#">Roman Greg scorer 4 goals</Link></h3>
                <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
            <div className="custom-media d-block">
              <div className="img-wrap mb-3">
                <Link to="#"><img src="./assets/images/img_2.jpg" alt="Image" className="img-fluid"/></Link>
              </div>
              <div>
                <span className="caption">May 19, 2020</span>
                <h3><Link to="#">Line for the upcoming match</Link></h3>
                <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
            <div className="custom-media d-block">
              <div className="img-wrap mb-3">
                <Link to="#"><img src="./assets/images/img_1.jpg" alt="Image" className="img-fluid"/></Link>
              </div>
              <div>
                <span className="caption">May 19, 2020</span>
                <h3><Link to="#">Roman Greg scorer 4 goals</Link></h3>
                <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
            <div className="custom-media d-block">
              <div className="img-wrap mb-3">
                <Link to="#"><img src="./assets/images/img_1.jpg" alt="Image" className="img-fluid"/></Link>
              </div>
              <div>
                <span className="caption">May 19, 2020</span>
                <h3><Link to="#">Roman Greg scorer 4 goals</Link></h3>
                <p className="mb-0"><Link to="#" className="more"><span className="mr-2">+</span>Learn More</Link></p>
              </div>
            </div>
          </div>

        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 text-center">
            <Link to="#" className="btn btn-primary py-3 px-4">View All Events</Link>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default HomePage;