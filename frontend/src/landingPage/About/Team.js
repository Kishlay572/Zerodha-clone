import React from "react";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center fs-3 p-5">People</h1>
      </div>
      <div className="row" style={{ paddingLeft: "9rem" }}>
        <div className="col-5 text-center text-muted">
          <img
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-7 text-muted" style={{ paddingRight: "4rem" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>
            Playing basketball is his zen. Connect on <a href="">Homepage</a> /{" "}
            <a href="">TradingQnA</a> /<a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
