import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./ImagesCarousal.module.css";
import img1 from "../../images/boy.png";
// import Card from "../../components/Card";
import { fetchPosts } from "../../redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./ImagesCarousal.module.css";
const ImagesCarousal = () => {
<<<<<<< HEAD
  const { posts } = useSelector((state) => state.data);
=======
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  // const found = posts.filter((element) => element == "jewelery");
  // console.log(found);
  const {posts} =useSelector(state => state.data);
>>>>>>> d4c05ddef73828da4b611116cdb3480d43edee14
  const dispatch = useDispatch();
  // const [user, setUser] = useState([]);
  console.log("posts from home", posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  // const [jewelery, setJewelery] = useState([]);
  // const getUser = async () => {
  //   const ab = await fetch(
  //     "https://fakestoreapi.com/products/category/jewelery"
  //   );
  //   setJewelery(await ab.json());
  // };
  // useEffect(() => {
  //   getUser();
  // }, [jewelery]);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "invert(100%)",
          // padding: "100px",
          width: "30px",
          height: "50px",
          content: "━>",
          // backgroundColor: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "invert(100%)",
          backgroundImage: "url(../../images/noun_Arrow Left_2682937.png)",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <section>
        <div
        // className={style.imgCarous}
        >
          <Slider {...settings}>
            {/* <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div> */}
            {/* {posts.map((value, index) => {
              return (
                <div>
                  <img src={value} alt="" />
                </div>
              );
            })} */}
            {posts.map((post, curElem) => (
              <div className={style.imgCarousCard} key={curElem}>
                <Link to={`/category/${post}`}>
                  <a href="">{post}</a>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* <section>
        <div>
          <Slider {...settings}>
            {jewelery.map((value, index) => {
              return <div>{value.title}</div>;
            })}
          </Slider>
        </div>
      </section> */}
    </div>
  );
};

export default ImagesCarousal;
