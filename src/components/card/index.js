import React from 'react';
import { useParams } from 'react-router';
import style from './Card.module.css';



const CatagoryCard = ({jeweleryData,electronics,manData,womenData}) => {

    const {category} =useParams();
    // var titleTemp= jeweleryData.title;

    // if(titleTemp.length>10){
    //     titleTemp=titleTemp.slice(0,15);
    // }

    // console.log(titleTemp);
    // titleTemp=titleTemp.slice(0,10);
    
    console.log("jewlery",jeweleryData);
    console.log("Electronics",electronics);
    console.log("MenCollection",manData);
    console.log("WomenCollection",womenData);
    return (
        <div className={style.section}>
        {/* <div  className={style.section}> */}
            <div className={style.container}>
                <div className="row d-flex">
                {
                    jeweleryData.map((value,index)=>{
                        return         <div  key={index} className="col-lg-3">
                                            <div className={style.cardWrapper}>
                                                    <div className={style.imgWrapper}>
                                                        <img src={value.image} className="img-fluid" alt="cardsbg"/>
                                                    </div>
                                                    <div className={style.contentWrap}>
                                                            <p>{value.title.slice(0,18)}  </p>
                                                            <p> {value.price}</p>
                                                    </div>
                                            </div>
                                        </div>                               
                            
                    })

                }
                </div>
            </div>
        {/* </div> */}
                
        </div>
    )
}

export default CatagoryCard;
