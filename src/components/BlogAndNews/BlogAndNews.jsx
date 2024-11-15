import './BlogAndNews.css'
import Title from '../Title/Title'
import BlogAndNewsCard from '../BlogAndNewsCard/BlogAndNewsCard'
import Slider1 from '../Slider/Slider1/Slider1'

export default function BlogAndNews() {
  const blogCardComponents = [
<BlogAndNewsCard imageUrl= "/Images/blogThumb1_2.webp" category="Uncategorized" date="March 14,2024" title="Best And Fastest Data Server Ever" profileImageUrl="/Images/blogProfile1_2.webp" authorName="Admin" authorRole="Co, Founder" />,
<BlogAndNewsCard imageUrl= "/Images/blogThumb1_3.webp" category="Technology" date="March 24,2024" title="Best And Fastest Data Server Ever" profileImageUrl="/Images/blogProfile1_3.webp" authorName="Admin" authorRole="Co, Founder" />,
<BlogAndNewsCard imageUrl= "/Images/blogThumb1_1.webp" category="Shared Hosting" date="March 29,2024" title="Best And Fastest Data Server Ever" profileImageUrl="/Images/blogProfile1_1.webp" authorName="Admin" authorRole="Co, Founder" />,
  ];
  return (
    <div className=' exContainer p-4'>
      <Title title="Blog And News" heading="Featured News And Insights"/>

      <Slider1 cards={blogCardComponents} />

    </div>
  )
}
