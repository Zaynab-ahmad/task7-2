import AboutBrand from '../../components/AboutBrand/AboutBrand';
import AboutSlider from '../../components/AboutSlider/AboutSlider';
import AboutTeam from '../../components/AboutTeam/AboutTeam';
import AboutTitle from '../../components/AboutTitle/AboutTitle';
import AboutHero from '../../components/Hero/AboutHero/AboutHero'
import './About.css';
import { FaChevronRight } from "react-icons/fa";


export default function About() {
  return (
    <>     
      <AboutHero title="About" sec={<span>Home <FaChevronRight /> About</span>} />
      <AboutSlider/>
      <AboutTitle/>
      <AboutTeam/>
      <AboutBrand/>
    </>
  )
}
