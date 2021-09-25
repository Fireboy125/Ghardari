import React, { useState, useEffect } from "react";
import style from "../Category/Category.module.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from "../../components/Card";
import HomeIcon from '@mui/icons-material/Home';
<<<<<<< HEAD
=======
import {useSelector,useDispatch} from 'react-redux';
import { fetchPosts } from "../../redux/action/action.js";

>>>>>>> 6b5b2359f002264614074b5428d02c3085319d82
const Category = () => {
  
  const dispatch =useDispatch();

useEffect(() => {
  dispatch(fetchPosts());
}, [])
  
  

  const {posts,loading} =useSelector((state)=> ({...state.data}));
  console.log("posts",posts)

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
          <div className="row">
            <div className="col-lg-2">
           <div className={style.contentWrapper}>
<<<<<<< HEAD
               <HomeIcon className={style.iconHome}/> \ <h5> Categories </h5>
=======
               <HomeIcon className={style.iconHome}/> / <h5> Categories </h5>
>>>>>>> 6b5b2359f002264614074b5428d02c3085319d82

           </div>    
           <div className={style.listWapper}>
                    <ul>
                        <li> 
                        <FormGroup className={style.formGroup}>
                              <h6> Stones Types </h6> 
                              <FormControlLabel control={<Checkbox defaultChecked />} label="ALEXANDRITE" />
                              <FormControlLabel control={<Checkbox />} label="AMETHYST" />
                              <FormControlLabel control={<Checkbox />} label="AQUAMARINE" />
                              <FormControlLabel control={<Checkbox />} label="EMERALD" />
                        </FormGroup>
                         </li> 
                   
                    </ul>
               </div>   
               <div className={style.listWapper}>
                    <ul>
                        <li> 
                        <FormGroup className={style.formGroup}>
                              <h6> Jwellery Types </h6> 
                              <FormControlLabel control={<Checkbox defaultChecked />} label="Temple Jewellery" />
                              <FormControlLabel control={<Checkbox />} label="Bead Jewellery" />
                              <FormControlLabel control={<Checkbox />} label="Bridal Jewellery" />
                              <FormControlLabel control={<Checkbox />} label="Filigree Jewellery" />
                        </FormGroup>
                         </li> 
                   
                    </ul>
               </div> 
               <div className={style.listWapper}>
                    <ul>
                        <li> 
                        <FormGroup className={style.formGroup}>
                              <h6> Shirt Types </h6> 
                              <FormControlLabel control={<Checkbox defaultChecked />} label="camp Collar shirt" />
                              <FormControlLabel control={<Checkbox />} label="Cotton Twill Shirt" />
                              <FormControlLabel control={<Checkbox />} label="Flannel Shirt" />
                              <FormControlLabel control={<Checkbox />} label="Denim Shirt" />
                              {/* <button className={style.actionBtn}> Submit </button> */}
                        </FormGroup>
                
                         </li> 
                         <button className={style.actionBtn}> Submit </button>
                    </ul>
               </div>  
<<<<<<< HEAD
                       
        

        </div>
=======
        </div>

        {/* Testing */}

          <div>
          <h1>Testing Thunk </h1>       
           { !loading ? (
                posts.map((value,index)=>{
                  return  <div key={index}>
                                <h3> {value.title} </h3>
                                <h3>{value.category} </h3>
                          </div>

                })  ): (
                 <h3> Loading </h3>

              )
           }
          </div>

        {/* testing end */}
>>>>>>> 6b5b2359f002264614074b5428d02c3085319d82
        <div className="col-lg-9">
      
              <div className={style.wrapper}>
                  <div className={style.titleWrap}>
                      <h1> Jwellery  Collections</h1>
                  </div>
                <Card
                  jeweleryData={jeweleryData}
                  electronics={electronicsData}
                  manData={menCollectionData}
                  womenData={womenCollectionData}
                />
              </div>
        </div>
      </div>
        </div>
      
      </div>
    </>
  );
};

export default Category;
