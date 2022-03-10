import React from "react";

function Card() {
  return (
    <div className="card">
      <img src="assets/img/demopic/5.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="info">
          <h5 className="card-title">Card title</h5>
          <div className="social-media">
            <i className="icon fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="icon fa fa-github" aria-hidden="true"></i>
            <i className="icon fa fa-twitter" aria-hidden="true"></i>
          </div>
        </div>
        <p className="card-text">Office: London</p>
      </div>
    </div>
  );
}

export default Card;
