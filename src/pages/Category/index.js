import React, { useState, useEffect } from "react";
import style from "../Category/Category.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "../../components/Card";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/action/action.js";
import {Link, useParams} from 'react-router-dom';

const Category = () => {
  const {id}=useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  console.log("posts", posts);

  const [category, setCategory] = useState([]);


  //Setting category type data
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then((res) => res.json())
      .then((result) => setCategory(result))
      .catch((error) => console.log("Not Connected Succefully", error));
  }, []);
  return (
    <>
      <div className={style.section}>
        <div className={style.container}>
          <div className="row">
            <div className="col-lg-2">
              <div className={style.contentWrapper}>
             
             <Link  style={{color:"black"}} to="/home" > <HomeIcon className={style.iconHome} />  </Link>   / <h5> {id.toUpperCase()} </h5>
              </div>
              <div className={style.listWapper}>
                <ul>
                  <li>
                    <FormGroup className={style.formGroup}>
                      <h6> Stones Types </h6>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="ALEXANDRITE"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="AMETHYST"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="AQUAMARINE"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="EMERALD"
                      />
                    </FormGroup>
                  </li>
                </ul>
              </div>
              <div className={style.listWapper}>
                <ul>
                  <li>
                    <FormGroup className={style.formGroup}>
                      <h6> Jwellery Types </h6>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Temple Jewellery"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Bead Jewellery"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Bridal Jewellery"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Filigree Jewellery"
                      />
                    </FormGroup>
                  </li>
                </ul>
              </div>
              <div className={style.listWapper}>
                <ul>
                  <li>
                    <FormGroup className={style.formGroup}>
                      <h6> Shirt Types </h6>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="camp Collar shirt"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Cotton Twill Shirt"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Flannel Shirt"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Denim Shirt"
                      />
                      {/* <button className={style.actionBtn}> Submit </button> */}
                    </FormGroup>
                  </li>
                  <button className={style.actionBtn}> Submit </button>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className={style.wrapper}>
                <div className={style.titleWrap}>
                  <h1> {id} Collections</h1>
                </div>
                <Card
                  category={category}
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
