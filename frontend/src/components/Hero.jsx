import { useEffect, useState } from "react";
import heroimage from "../assets/images/heroimage.jpg";
import image1 from "../assets/images/image1 (2).jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const Hero = () => {
  const images = [
    { src: image2, alt: "First image" },
    { src: image1, alt: "Second image" },
    { src: image3, alt: "Third image" },
    { src: heroimage, alt: "Third image" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl text-center md:text-4xl font-semibold">
          Inspire, Educate, and Explore: Your Guide to Knowledge and Creativity
        </h1>
        <p className="md:text-xl mt-5 w-fit text-center">
          Welcome to our blog, where we delve into a world of ideas, insights,
          and inspiration. Explore thought-provoking articles on a variety of
          topics designed to ignite your curiosity and expand your horizons.
          Whether you&apos;re seeking practical advice, in-depth analysis, or
          simply a moment of reflection, join us on a journey of discovery and
          learning. Let&apos;s uncover new perspectives together and celebrate
          the joy of knowledge.
        </p>
      </div>
      <div className="pt-20">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
