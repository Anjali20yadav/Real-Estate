import React from "react";
import "./Residencies.css";
import data from "../../utils/slider.json";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <div className="r-card-grid">
          {data.slice(0, 4).map((card, i) => (
            <div className="flexColStart r-card" key={i}>
              <img src={card.image} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residencies;
