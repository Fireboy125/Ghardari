import React from 'react'
import style from './productDetail.module.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import boy from '../../images/boy.png'
const ProductDetails = () => {
    return (
        <> <div className={style.section}>
                <div className={style.container}>
                        <div className="row">
                        <div className="col-lg-5">
                            <div className={style.Wrapper}>
                                <div className={style.contentWrapper}>
                                    <HomeIcon className={style.iconHome}/> / <h5> Categories </h5>
                                </div> 
                                    <div className={style.ImageWrapper}>
                                            <img  src={boy} alt="Product"/>
                                    </div> 
                             </div>       
                         </div>

                         <div className="col-lg-6">
                            <div className={style.Wrapper}>
                            <div className={style.delieveryWrapper}>
                                <div className={style.contentWrapper}>
                                    <div className={style.flexWrapper}>
                                        <div className={style.iconWrap}>
                                        <LocalShippingIcon className={style.iconHome}/> 
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
                                        <LocalShippingIcon className={style.iconHome}/> 
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
                                            <h4> Title </h4>
                                            <h5>Price </h5>
                                            <h5> Title </h5>
                                            <h5>  </h5>
                                            <p>Discription </p>
                                            <div className={style.buttonWrap}>
                                                <button className={style.actionBtn}> <AddIcon/>  </button>
                                                <button className={style.actionBtn}> Add to Cart </button>
                                                <button className={style.actionBtn}> <RemoveIcon/>  </button>
                                            </div>
                                    </div> 
                          
                             </div>
                         </div>
                       </div>
                </div>
           </div>
            
        </>
    )
}

export default ProductDetails;
