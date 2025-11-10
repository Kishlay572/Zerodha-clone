import React from "react";

function Hero() {
  return (
    <div className="container mt-5 p-5 " style={{ marginBottom: "8rem" }}>
      <div className="row text-center mt-4">
        <h1 className="fs-3 mt-5">Charges</h1>
        <p className="fs-4 text-muted mb-5">List of all charges and taxes</p>
        <div className="col-4 mt-5 p-3">
          <img src="media/pricing0.svg" style={{ height: "13rem" }} />
          <h3 className="mb-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img src="media/intradayTrades.svg" style={{ height: "13rem" }} />
          <h3 className="mb-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5 p-3 ">
          <img src="media/pricingMF.svg" style={{ height: "13rem" }} />
          <h3 className="mb-4">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
