import React from "react";
// import Slider from "react-slick";
import carousel_1 from "../../assets/carousel_1.jpg";
import carousel_2 from "../../assets/carousel_2.jpg";
import carousel_3 from "../../assets/carousel_3.jpg";

const CarouselComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="carousel">
      <main>
        {/* <Slider {...settings} className="slick-slider"> */}
        <div className="images">
          <img className="c-img" src={carousel_1} alt="image1" />
        </div>
        <div>
          <img className="c-img" src={carousel_2} alt="image2" />
        </div>
        <div>
          <img className="c-img" src={carousel_3} alt="image3" />
        </div>
        {/* </Slider> */}
      </main>
    </section>
  );
};

export default CarouselComp;
