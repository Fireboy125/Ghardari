import React from 'react';
import { useParams } from 'react-router';

const CatagoryCard = ({jeweleryData,electronics,manData,womenData}) => {
    const {category} =useParams();
    console.log("jewlery",jeweleryData);
    console.log("Electronics",electronics);
    console.log("MenCollection",manData);
    console.log("WomenCollection",womenData);
    return (
        <div>
                
        </div>
    )
}

export default CatagoryCard;
