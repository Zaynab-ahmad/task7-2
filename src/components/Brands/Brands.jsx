import Slider from "react-slick";
import './Brand.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandLogo1 from '../../assets/Images/brandLogo1_1.svg';
import brandLogo2 from '../../assets/Images/brandLogo1_2.svg';
import brandLogo3 from '../../assets/Images/brandLogo1_4.svg';
import brandLogo4 from '../../assets/Images/brandLogo1_5.svg';
import brandLogo5 from '../../assets/Images/brandLogo1_3.svg';

export default function Brands() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
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
    <div className="Brands m-4 p-4 bg-white w-100" style={{ overflow: "hidden", zIndex:"10" }}>
      <Slider className="exContainer" {...settings}>
        <img className="m-1 w-75" src={brandLogo1} alt="Brand 1" />
        <img className="m-1 w-75" src={brandLogo2} alt="Brand 2" />
        <img className="m-1 w-75" src={brandLogo3} alt="Brand 4" />
        <img className="m-1 w-75" src={brandLogo4} alt="Brand 5" />
        <img className="m-1 w-75" src={brandLogo5} alt="Brand 3" />
      </Slider>
    </div>
  );
}
