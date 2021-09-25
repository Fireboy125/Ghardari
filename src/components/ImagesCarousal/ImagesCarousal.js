import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./ImagesCarousal.module.css";
import img1 from "../../images/boy.png";
// import Card from "../../components/Card";
import { fetchPosts } from "../../redux/action/action";
import { useSelector, useDispatch } from "react-redux";

const ImagesCarousal = () => {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  // const [filter,setFilter] = useState()
  // const history = useHistory();
  // const getUser = () => {
  //   setUser(() => dispatch(fetchPosts()));
  //   console.log(user);
  // };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "invert(100%)",
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
    autoplay: true,
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
        <div className="imgCarous">
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
            {/* <button onClick={() => dispatch(fetchPosts())}></button> */}

            {posts.map((post) => (
              <div>
                <a href="">{post}</a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ImagesCarousal;
