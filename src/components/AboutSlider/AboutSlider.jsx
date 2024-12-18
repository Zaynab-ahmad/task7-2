import "./AboutSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import asteriskIcon from '../../assets/Images/asterisk.svg';

export default function AboutSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="Brands py-4 bg-white w-100 text-black"
      style={{ overflow: "hidden" }}
    >
      <Slider className="d-flex justify-content-around" {...settings}>
        <div className="d-flex align-items-center">
          <img className="mx-1" src={asteriskIcon} alt="Brand 1" />
          <h3>Cyber Security</h3>
        </div>
        <div className="d-flex align-items-center">
          <img className="mx-1" src={asteriskIcon} alt="Brand 2" />
          <h3>Technology</h3>
        </div>
        <div className="d-flex align-items-center">
          <img className="mx-1" src={asteriskIcon} alt="Brand 3" />
          <h3>IT Solution</h3>
        </div>
        <div className="d-flex align-items-center">
          <img className="mx-1" src={asteriskIcon} alt="Brand 4" />
          <h3>Data Security</h3>
        </div>
      </Slider>
    </div>
  );
}
