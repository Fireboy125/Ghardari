import React from "react";
import Card from "../../components/Card/index";
import Carousal from "../../components/Carousal/Carousal";
import styles from "./home.module.css";
import ImagesCarousal from "../../components/ImagesCarousal/ImagesCarousal";
import img1 from "../../images/Free Shipping.png";
import img2 from "../../images/Payments.png";
import img3 from "../../images/Money.png";
import img4 from "../../images/Finest Quality.png";
const Home = () => {
  return (
    <>
      <Carousal />
      <Card />
      <section className={styles.imgCarousal}>
        <ul className={styles.imgListWrapper}>
          <li className={styles.imgListItem}>What's New</li>
          <li>Best Seller</li>
          <li>Manifestation</li>
          <li>Attraction</li>
          <li>Departments</li>
          <li>Sale</li>
          <a href="#">Show More</a>
        </ul>
      </section>
      <section className={styles.ImagesCarousal}>
        <div className="container">
          <div className="d-flex ImagesCarousalContent mb-5">
            <h2>
              Our ━━━━━━━━━ <br /> Categories
            </h2>
            <p
              style={{
                width: "550px",
                marginLeft: "32%",
                fontSize: "20px",
                color: "rgba(137, 137, 137)",
                fontWeight: "500",
              }}
            >
              Various types of clothes categories for you. You can easily search
              for what category of clothes you want.
            </p>
          </div>
        </div>
        <ImagesCarousal />
      </section>
      <section className={styles.choose}>
        <div className="container">
          <div className={styles.chooseWrap}>
            <h2>Why should you choose us?</h2>
            <div className="row mt-5">
              <div className="col-3 ">
                <div className={styles.chooseWrapContent}>
                  <img src={img1} alt="" />
                  <h4>Free Shipping</h4>
                  <p>
                    All purchases over $199 are eligible for free shipping via
                    USPS First Class Mail.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.chooseWrapContent}>
                  <img src={img2} alt="" />
                  <h4>Easy Payments</h4>
                  <p>
                    All payments are processed instantly over a secure payment
                    protocol.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.chooseWrapContent}>
                  <img
                    style={{ margin: "auto", textAlign: "center" }}
                    src={img3}
                    alt=""
                  />
                  <h4>Money-Back Guarantee</h4>
                  <p>
                    If an item arrived damaged or you've changed your mind, you
                    can send it back for a full refund.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.chooseWrapContent}>
                  <img src={img4} alt="" />
                  <h4>Finest Quality</h4>
                  <p>
                    Designed to last, each of our products has been crafted with
                    the finest materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container"></div>
      </section>
    </>
  );
};

export default Home;
