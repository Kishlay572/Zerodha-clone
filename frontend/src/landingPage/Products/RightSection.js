import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4 text-muted p-4" style={{ marginTop: "9rem" }}>
          <h3 className="mb-3 ">{productName}</h3>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more →
            </a>
          </div>
        </div>
        <div className="col-8">
          <img src={imageUrl} style={{ paddingLeft: "7rem" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
