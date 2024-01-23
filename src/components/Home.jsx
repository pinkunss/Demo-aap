import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="navbar">
            <ul>
              <li>
                <Link to="">Home </Link>
              </li>
              <li className="nav-item active">
                <Link to="">About us </Link>
              </li>
              <li className="nav-item active">
                <Link to="">Services </Link>
              </li>
              <li className="nav-item active">
                <Link to="/contect">Contact us </Link>
              </li>
              <li className="nav-item active">
                <Link to="">privacy policy </Link>
              </li>
            </ul>
          </div>
          <div className="text">
            <h1>WelCome to Food Market</h1>
            <div className="container" t id="center">
              <Link id="button" to="/product">
                <span></span> Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="banner2">
        <div className="container" id="center">
          <button id="button">
            <span></span>Viwe Portfolio
          </button>
        </div>
        <div className="container heding">
          <hr id="line" />
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1>ABOUT OUR COMPANY</h1>
            </div>
            <div className="col-12 col-lg-6">
              <h5>
                At Milennial Lucent, our mission is to approach every day like it will be our defining moment. <br /> We
                believe in creation and developing <br /> ideas of extraordinary magnetism to <br />
                effect the decisive advantage in the market place. <br /> We believe great ideas <br /> Can come from
                anywhere and from anyone.
              </h5>
            </div>
            <div className="container" id="center">
              <button id="button">
                <span></span>Read More
              </button>
            </div>
            <hr id="line" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
