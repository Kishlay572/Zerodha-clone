import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center">
      <div className="row ">
        <h1 className="fs-3 mb-3 text-muted">Open a Zerodha account</h1>
        <p className="text-muted fs-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "20%", margin: "auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
