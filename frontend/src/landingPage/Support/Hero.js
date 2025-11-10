import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-3" id="supportHero">
      <div
        className=""
        id="supportWrapper"
        style={{ paddingTop: "50px", paddingLeft: "10px" }}
      >
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row  m-3">
        <div className="col-6 " style={{ paddingLeft: "90px" }}>
          <h4 className="">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6" style={{ paddingLeft: "50px" }}>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
