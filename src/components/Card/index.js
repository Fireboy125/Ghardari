import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ category }) => {
  const { post, loading } = useSelector((state) => ({ ...state.data }));
  const [cat, setCat] = useState([]);
  console.log(category);
  // const ab = [...category];
  // const getCat = () => {
  //   setCat((value) => {
  //     return [...value, ab];
  //   });
  //   console.log(category);
  // };
  // useEffect(() => {
  //   console.log(cat);
  // }, []);

  return (
    <>
      <div className="row">
        {!loading ? (
          category &&
          category.map((value, index) => {
            return (
              <div key={index} className="col-12 col-lg-3 col-md-4 col-sm-6">
                <div className={styles.card}>
                  <div className={styles.imgWrap}>
                    <img
                      className="img-fluid"
                      src={value.image}
                      alt="bg-Card"
                    />
                  </div>
                  <div className={styles.roundPercentage}>
                    <h3>30%</h3>
                  </div>
                  <div className={styles.contentWrap}>
                    <h4>{value.title}</h4>
                    <h3>{`$ ${value.price}`}</h3>
                  </div>
                  <div className={styles.buttonWrap}>
                    <button className={styles.actionBtn}>
                      {" "}
                      <Link
                        style={{ color: "black", textDecoration: "none" }}
                        to={`/products/${value.id}`}
                      >
                        {" "}
                        Show more...{" "}
                      </Link>{" "}
                    </button>
                    <Link to="/cart">
                      <button
                        className={styles.actionBtn}
                        // onClick={getCat}
                        type="button"
                      >
                        Add to Cart
                      </button>
                    </Link>
                    {/* <button onClick={getCat}>hello</button> */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading Data ...</h1>
        )}
      </div>
    </>
  );
};

export default Card;
