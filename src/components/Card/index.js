import React from "react";
// import img1 from "../../images/AdobeStock_236655481.png";
import styles from "./Card.module.css";

const Card = ({jeweleryData}) => {
  console.log(jeweleryData);
  return ( <>

    <div className="row">
      {
        jeweleryData && jeweleryData.map((value,index)=>{
         return    <div key={index} className="col-12 col-lg-3 col-md-4 col-sm-6">
                      <div  className={styles.card}>
                      <div className={styles.imgWrap}>
                        <img className="img-fluid" src={value.image} alt="bg-Card" />
                      </div>  
                      <div className={styles.roundPercentage}>
                        <h3>30%</h3>
                      </div>
                      <div className={styles.contentWrap}>
                      <h4>{value.title.slice(0,15)}</h4>
                        <h3>{ `$ ${value.price}`}</h3>
                      </div>
                      <div className={styles.buttonWrap}>
                        <button className={styles.actionBtn}> Show more... </button>
                        <button className={styles.actionBtn}> Add to Cart </button>
                      </div>
                  </div>
                  </div>
                  })
      }
     
    </div>
    </>
  );
};

export default Card;
