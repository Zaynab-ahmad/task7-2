import Slider from "react-slick";
import './Brand.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
       
        <img className="m-1 w-75" src="/Images/brandLogo1_1.svg" alt="Brand 1" />
        <img className="m-1 w-75" src="/Images/brandLogo1_2.svg" alt="Brand 2" />
        <img className="m-1 w-75" src="/Images/brandLogo1_4.svg" alt="Brand 4" />
        <img className="m-1 w-75" src="/Images/brandLogo1_5.svg" alt="Brand 5" />
        <img className="m-1 w-75" src="/Images/brandLogo1_3.svg" alt="Brand 3" />
      
      </Slider>
    </div>
  );
}





