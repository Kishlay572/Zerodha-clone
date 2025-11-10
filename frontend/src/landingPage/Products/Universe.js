import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className=" row text-muted text-center">
        <h1 className="fs-4 mt-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="product-detail col-4 ">
          <img src="media/zerodhaFundhouse.png" />
          <p>
            Our asset management venture
            <br /> that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
          <img src="media/streakLogo.png" />
          <p>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className=" product-detail col-4 ">
          <img src="media/sensibullLogo.svg" />
          <p>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
          <img src="media/smallcaseLogo.png" />
          <p>
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="product-detail col-4">
          <img src="media/tijori.svg" />
          <p>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
          <img src="media/dittoLogo.png " />
          <p>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <button
          className="btn btn-primary fs-5 mb-3 mt-4"
          style={{ width: "20%", margin: "auto" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
