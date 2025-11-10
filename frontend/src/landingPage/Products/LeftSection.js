import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8 p-3 mb-5 ">
          <img src={imageUrl} />
        </div>
        <div className="col-4 p-5 text-muted">
          <h3 className="mb-3 mt-3">{productName}</h3>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "20px", textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>
          <div className="mt-3 ">
            <a href={googlePlay}>
              <img src="Media/googlePlayBadge.svg" alt="googlPlay" />
            </a>
            <a href={appStore} style={{ marginLeft: "5px" }}>
              <img src="Media/appstoreBadge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
