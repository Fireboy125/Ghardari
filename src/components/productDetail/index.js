import React ,{useEffect,useState} from "react";
import style from "./productDetail.module.css";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from '@mui/icons-material/Add';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
const ProductDetails = () => {
  const {id}= useParams();
  console.log(id);

  const [productDetail,setProductDetails] =useState({});



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProductDetails(json))
  }, [])

  console.log(productDetail);

  return (
    <>
      
      <div className={style.section}>
        <div className={style.container}>
          <div className="row">
            <div className="col-lg-5">
              <div className={style.Wrapper}>
                <div className={style.contentWrapper}>
                <Link style={{color:"black"}} to='/'>  <HomeIcon className={style.iconHome} /> </Link>  /
                  <h5> {productDetail.category} </h5>
                </div>
                <div className={style.ImageWrapper}>
                  <img src={productDetail.image} alt="Product" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={style.Wrapper}>
                <div className={style.delieveryWrapper}>
                  <div className={style.contentWrapper}>
                    <div className={style.flexWrapper}>
                      <div className={style.iconWrap}>
                        <LocalShippingIcon className={style.iconHome} />
                      </div>
                      <div className={style.contentWrap}>
                        <h5> Standard shipment </h5>
                        <p> Free within 3-6 business days</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.contentWrapper}>
                    <div className={style.flexWrapper}>
                      <div className={style.iconWrap}>
                        <LocalShippingIcon className={style.iconHome} />
                      </div>
                      <div className={style.contentWrap}>
                        <h5>Express delivery </h5>
                        <p> $35,00 available</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.ContnetWrapper}>
                  <div className={style.roundPercentage}>
                    <h3>Sale</h3>
                  </div>
                  
                  <h4> {productDetail.title} </h4>
                  <h5>{ ` $ ${productDetail.price}`} </h5>
                  <h5> {productDetail.category} </h5>
                  <h5> </h5>
                  <p>{productDetail.description} </p>
                  <div className={style.buttonWrap}>
                    <button className={style.actionBtn}>   
                      <AddIcon />
                    </button>
                    <button className={style.actionBtn}> Add to Cart </button>
                    <button className={style.actionBtn}>
                      <RemoveIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
