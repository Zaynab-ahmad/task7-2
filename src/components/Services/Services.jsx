
import Slider1 from "../Slider/Slider1/Slider1";
import Title from "../Title/Title";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import "./Services.css";
import ServicesSec from "./ServicesSec/ServicesSec";
import Card1 from "../Cards/Card1/Card1"

export default function Services() {
  const cardComponents = [
      <Card1 icon="/Images/serviceIcon1_1.svg" title="Data Guard Sentinel"
       description= "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
 />,

  <Card1 
  
    icon= "/Images/serviceIcon1_2.svg"
    title= "Woo Commerce"
    description= "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
  />,
  <Card1
    icon= "/Images/serviceIcon1_3.svg"
    title= "CRM Solution"
    description= "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
  />,
  <Card1 
    icon= "/Images/serviceIcon1_4.svg"
    title= "Web Design"
    description= "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
  />
];


  return (
    <>
      <div className="services exContainer">
        <span className="w-50">
          <Title
          title="Our Services"
          heading="Elevating Businesses With IT Ingenuity"
        />
        </span>
        <Slider1 cards={cardComponents} />
        <YoutubeVideo/>
      </div>
      <ServicesSec/>
      
    </>
  );
}
