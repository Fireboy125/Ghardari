import React from "react";
import style from "./AddCart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import img from "../../images/shoes.jpg";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddCart = () => {
  return (
    <div className={style.addcart_wrapper}>
      <div className={style.shopping_cart}>
        <div className={style.title}>Shopping Bag</div>

        <div className={style.item}>
          <div className={style.buttons}>
            <CloseIcon color="disabled" className={style.delete_btn} />
            <FavoriteIcon 
              className={style.like_btn}
            />
          </div>

          <div className={style.image}>
            <img src={img} alt="shoes" className={style.product_img} />
          </div>

          <div className={style.description}>
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
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

          <div className={style.total_price}>$549</div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
