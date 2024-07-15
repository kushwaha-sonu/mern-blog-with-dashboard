import heroimage from "../assets/heroimage.jpg";

const Hero = () => {
  return (
    <main className="">
      <div className="container mx-auto p-2">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-semibold">Inspire, Educate, and Explore: Your Guide to Knowledge and Creativity</h1>
          <p className="text-xl mt-5 w-fit text-center">Welcome to our blog, where we delve into a world of ideas, insights, and inspiration. 
          Explore thought-provoking articles on a variety of topics designed to ignite your curiosity and expand your horizons.
           Whether you&apos;re seeking practical advice, in-depth analysis, or simply a moment of reflection, join us on a journey of discovery and learning.
            Let&apos;s uncover new perspectives together and celebrate the joy of knowledge.</p>
        </div>
        <div className="pt-20">
          <img
            src={heroimage}
            alt="nature"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
