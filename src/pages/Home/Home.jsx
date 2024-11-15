import BlogAndNews from '../../components/BlogAndNews/BlogAndNews'
import Brands from '../../components/Brands/Brands'
import Contact from '../../components/Contact/Contact'
import HomeFooter from '../../components/Footer/HomeFooter/HomeFooter'
import Hero from '../../components/Hero/Hero'
import Pricing from '../../components/Pricing/Pricing'
import Services from '../../components/Services/Services'
import Testimonial from '../../components/Testimonial/Testimonial'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero/>
      <Brands/>
      <Services/>
      <Pricing/>
      <Contact/>
      <Testimonial/>
      <BlogAndNews/>
    </>
  )
}
