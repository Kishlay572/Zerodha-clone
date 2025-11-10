import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/homeHero.png"
          alt="Hero Image"
          className="mb-5 mt-5"
        ></img>
        <h1 className="mt-5 fs-3 mb-3 text-muted  ">Invest in everything</h1>
        <p className="text-muted fs-4 mb-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "20%", margin: "auto" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
