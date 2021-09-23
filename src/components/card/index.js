import React from "react";
import img1 from "../../images/AdobeStock_236655481.png";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-3 col-md-4 col-sm-6">
        <div className={styles.card}>
          <img className="img-fluid" src={img1} alt="" />
          <div className={styles.roundPercentage}>
            <h3>30%</h3>
          </div>
          <h4>T-Shirt Summer Vibes</h4>
          <h3>$89.99</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
