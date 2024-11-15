import FeedbackCard from '../Cards/FeedbackCard/FeedbackCard'
import Title from '../Title/Title'
import './Testimonial.css'

export default function Testimonial() {
  const feedbackData = [
    {
      testimonialText:
        "Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website. Highly recommended for all!",
      userImage: "/Images/testiThumb3_1.webp",
      userName: "Kristin Watson",
      userRole: "Web Designer",
    },
    {
      testimonialText:
        "I've been using Extech for several months now, and I'm extremely impressed with the ease of customization it offers. The wide range of templates.",
      userImage: "/Images/testiThumb3_2.webp",
      userName: "Theresa Webb",
      isActive: "true",
      userRole: "Tech Enthusiast",
    },
    {
      testimonialText:
      "Extech offers exceptional value for money. The comprehensive suite of tools and seamless integration with various plugins and services make it a for all.",
      userImage: "/Images/testiThumb3_3.webp",
      userName: "Ronald Richards",
      userRole: "Web Entrepreneur",
    },
  ];
  return (
    <div className='testimonial bg-light w-100 text-center'>
      <div style={{marginTop:"130px"}}>

      <Title title="Testimonial" heading="Our Latest Clients Feedback"></Title>
      <div className='exContainer d-flex flex-wrap flex-lg-nowrap justify-content-center'>
        {feedbackData.map((feedback, index) => (
        <FeedbackCard 
           
          {...feedback} 
        />
      ))}
      </div>
      </div>
    </div>
  )
}
