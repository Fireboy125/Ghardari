import React, {useEffect} from "react";
// import img1 from "../../images/AdobeStock_236655481.png";
import styles from "./Card.module.css";
import { fetchPosts } from "../../redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Card = ({category}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  console.log("posts", posts);
  return ( <>

    <div className="row">
      { !loading? (
        category && category.map((value,index)=>{
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
                        <button className={styles.actionBtn}> <Link to={`/products/${value.id}`}> Show more... </Link>  </button>
                        <button className={styles.actionBtn}> Add to Cart </button>
                      </div>
                  </div>
                  </div>
                  })

            ) :(
               <h1 >Loading Data ...</h1> 
            ) 
      }
     
    </div>
    </>
  );
};

export default Card;
