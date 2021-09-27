// import React from 'react'
// import {useSelector, useDispatch} from "react-redux";
// import {BsDash, BsPlus} from "react-icons/bs";
// import { BsReverseBackspaceReverse } from "react-icons/bs";
// const Cart = () => {
//     const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
//     const dispatch = useDispatch();
//     return (
//         <div className="cart">
//             <div className="container">
//                 <h3>Your cart</h3>
//                 {products.length > 0 ? <>
//                 <div className="row">
//                     <div className="col-9">
//                     <div className="cart__heading">
//                         <div className="row">
//                             <div className="col-2">Picture</div>
//                             <div className="col-2">Name</div>
//                             <div className="col-2">Price</div>
//                             <div className="col-2">Inc/Dec</div>
//                             <div className="col-2">Total Price</div>
//                             <div className="col-2">Remove</div>
//                         </div>
//                     </div>
                    
//                     {products.map(product => (
//                         <div className="row verticalAlign" key={product.id}>
//                          <div className="col-2">
//                              <div className="cart__image">
//                                  <img src={`/images/${product.image}`} alt=""/>
//                             </div>   
//                          </div>
//                          <div className="col-2">
//                              <div className="cart__name">
//                                  {product.name}
//                              </div>
//                          </div>
//                          <div className="col-2">
//                              <div className="cart__price">
//                                  {product.discountPrice}
//                              </div>
//                          </div>
//                          <div className="col-2">
//                          <div className="details__info cart__incDec">
//                     <div className="details__incDec">
//                         <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
//                         <span className="quantity">{product.quantity}</span>
//                         <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
//                     </div>
//                 </div>
//                          </div>
//                          <div className="col-2">
//                              <div className="cart__total text-center">
//                                  {product.discountPrice * product.quantity}
//                              </div>
//                          </div>
//                          <div className="col-2">
//                              <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
//                                  <BsReverseBackspaceReverse />
//                              </div>
//                          </div>
//                         </div>
//                     ))}
//                     </div>
//                     <div className="col-3 summary-col">
//                         <div className="summary">
//                             <div className="summary__heading">
//                                 Summary
//                             </div>
//                             <div className="summary__details">
//                                 <div className="row mb-10">
//                                     <div className="col-6">
//                                         Total Items:
//                                     </div>
//                     <div className="col-6">{totalQuantities}</div>
//                                 </div>
//                                 <div className="row mb-10">
//                                     <div className="col-6">
//                                         Total Price
//                                     </div>
//                                     <div className="col-6">
//                                         {totalPrice}
//                                     </div>
//                                 </div>
//                                 <button type="button" className="checkout">Checkout</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </> : 'Your cart is empty!'}
//             </div>
//         </div>
//     )
// }

// export default Cart




import React,{useState,useEffect} from "react";
import style from "./AddCart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import img from "../../images/boy.png";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router";
import { useDispatch ,useSelector } from "react-redux";
import { fetchSpecificProduct } from "../../redux/action/action";

const AddCart = () => {


const {id} =useParams();
console.log("from add to cart component",id);

const {posts,loading} =useSelector(state => state.data);
const {products} = useSelector (state=>state.cart)

// useEffect(()=>{
//   setCartItems((value)=>{
//     return( [...value,posts]);
// })
// },[])



  return (
    <div className={style.addcart_wrapper}>
      <div className={style.shopping_cart}>
        <div className={style.title}>Shopping Bag</div>

        {products.map((product ,index)=>{
          return       <div className={style.item}>
          <div className={style.buttons}>
            <CloseIcon onClick={
              ()=>{
                const updatedProducts= products.filter((value)=>value.id!==product.id)
                console.log("UPDTED STUFF")
                console.log(updatedProducts)
              }
            } color="disabled" className={style.delete_btn} />
            <FavoriteIcon 
              className={style.like_btn}
            />
          </div>

          <div className={style.image}>
            <img src={product.image} alt="shoes" className={style.product_img} />
          </div>

          <div className={style.description}>
            <span>C{product.title}</span>
            {/* <span>Bball High</span> */}
            {/* <span>White</span> */}
          </div>

          <div className={style.quantity}>
            <button className={style.plus_btn} type="button" name="button">
              <AddIcon />
            </button>
            <input type="text" name="name" product="1" />
            <button className={style.minus_btn} type="button" name="button">
              <RemoveIcon />
            </button>
          </div>

          <div className={style.total_price}> ${product.price}</div>
        </div> 
        })
          
     

        }

        {/* <div className={style.item}>
          <div className={style.buttons}>
            <CloseIcon color="disabled" className={style.delete_btn} />
            <FavoriteIcon 
              className={style.like_btn}
            />
          </div>
 
          <div className={style.quantity}>
            <button className={style.plus_btn} type="button" name="button">
              <AddIcon />
            </button>
            <input type="text" name="name" value="1" />
            <button className={style.minus_btn} type="button" name="button">
              <RemoveIcon />
            </button>
          </div>

          <div className={style.total_price}> $999</div>
        </div> */}
        <div className={style.total_price}>Total:  $999</div>
      </div>
    </div>
  );
};

export default AddCart;