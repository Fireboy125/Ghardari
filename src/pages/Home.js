import React from "react";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <section className={styles.hero_wrapper}>
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <h4>Clothes collection with Premium Quality</h4>
                <h2>Simple Way to choose your clothes</h2>
                <form>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your email to get discount 20%"
                  />
                  <input type="submit"></input>
                </form>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-12"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
