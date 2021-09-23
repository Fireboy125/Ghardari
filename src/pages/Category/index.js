import React, { useState, useEffect } from "react";
import style from "../Category/Category.module.css";
import Card from "../../components/Card";
const Category = () => {
  const [jeweleryData, setJewelaryData] = useState([]);
  const [electronicsData, setElectronicData] = useState([]);
  const [menCollectionData, setMenCollection] = useState([]);
  const [womenCollectionData, setWomenCollection] = useState([]);

  //jwellery data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((result) => setJewelaryData(result))
      .catch((error) => console.log("Not Connected Succefully", error));
  }, []);

  // Electronics data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((result) => setElectronicData(result))
      .catch((error) => console.log("Not Connected Succefully", error));
  }, []);
  // Men collections data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((result) => setMenCollection(result))
      .catch((error) => console.log("Not Connected Succefully", error));
  }, []);
  // women collections data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((result) => setWomenCollection(result))
      .catch((error) => console.log("Not Connected Succefully", error));
  }, []);
  return (
    <>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <Card
              jeweleryData={jeweleryData}
              electronics={electronicsData}
              manData={menCollectionData}
              womenData={womenCollectionData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
