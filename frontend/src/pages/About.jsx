const About = () => {
  return (
    <main className="h-screen mt-10">
      <div className="container mx-auto p-2">
        <div>
          <h1 className="text-center text-3xl font-semibold">About</h1>
          <p className="text-center mt-2">
            This is a simple blog application built with the MERN stack. It
            allows users to create, read, update, and delete blog posts.
          </p>
        </div>

        <div className="mt-6 border p-4">
          <h2 className="text-center text-3xl font-semibold">Our Story</h2>
          <p className="w-fit text-center mt-2">
            Welcome to [Your Blog Name], your go-to destination for insightful
            articles, tips, and resources to enrich your knowledge and inspire
            your creativity. Our mission is to create a platform where curious
            minds can explore diverse topics, from technology trends to
            lifestyle advice, all curated with expertise and passion. Founded in
            [Year], we believe in the power of sharing ideas and experiences to
            foster learning and personal growth. Join us on this journey as we
            strive to ignite curiosity, spark meaningful conversations, and
            empower you to discover new perspectives.
          </p>
        </div>

        <div className="mt-6 border p-4">
          <h2 className="text-center text-3xl font-semibold">Our Team</h2>
          <p className="w-fit text-center mt-2">
            Meet the dedicated individuals behind [Your Blog Name]. Our team
            brings together diverse backgrounds and expertise, united by a
            shared commitment to delivering valuable content that resonates with
            our readers. Whether it&apos;s writing compelling stories,
            researching cutting-edge topics, or engaging with our community,
            each member plays a vital role in shaping our blog&apos;s vision. We
            are passionate about creating content that matters and connecting
            with our audience on a deeper level. Get to know us, and feel free
            to reach out with your feedback, ideas, or collaborations. Together,
            let&apos;s explore the limitless possibilities of knowledge and
            creativity.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
