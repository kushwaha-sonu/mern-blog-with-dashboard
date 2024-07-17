import Card from "../components/Card"
import Hero from "../components/Hero"
import image from "../assets/images/heroimage.jpg"

const Home = () => {

  const data=[
    {
      "title": "Understanding JavaScript Promises",
      "author": "Jane Doe",
      "date": "2024-07-17",
      "description": "An in-depth look at JavaScript Promises and how to use them effectively in your web development projects.",
      "image": image,
      "author_image": image
    },
    {
      "title": "Top 10 Python Libraries for Data Science",
      "author": "John Smith",
      "date": "2024-07-16",
      "description": "Discover the top 10 Python libraries every data scientist should know about.",
      "image": image,
      "author_image": image
    },
    {
      "title": "CSS Grid vs Flexbox: When to Use Which?",
      "author": "Alice Johnson",
      "date": "2024-07-15",
      "description": "A comprehensive guide to understanding when to use CSS Grid and when to opt for Flexbox in your layout designs.",
      "image": image,
      "author_image": image
    }
  ]
  return (
    <main className="my-14">
      <Hero/>
      <div className="container mx-auto p-2 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post, index) => (
            <Card key={index} post={post}/>
          ))}
        </div>
      </div>
     
    </main>
  )
}

export default Home