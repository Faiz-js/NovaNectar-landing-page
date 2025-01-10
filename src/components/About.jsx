import React from "react";

const About = () => {
  return (
    <main>
      <h1 className="bg-black text-white text-center text-2xl md:text-3xl lg:text-4xl py-5 md:py-10 font-semibold">
        About Us
      </h1>
      <div className="backdrop-blur-md bg-white/30 rounded-md py-3 mt-5 mx-2 md:mx-20 lg:mx-40">
        <h1 className="text-center px-5 md:px-20 lg:px-40 font-bold text-3xl md:text-4xl lg:text-6xl my-5">
          We are Logitech G
        </h1>
        <p className="px-5 md:px-20 lg:px-40 text-center text-xl">
          Logitech is a global leader in designing and delivering innovative
          products that help people connect and interact in a digital world.
          From keyboards and mice to webcams, gaming gear, and video
          conferencing solutions, Logitech's products enable seamless
          communication and productivity for everyone. With a commitment to
          quality, sustainability, and user experience, Logitech continues to
          enhance the way we work, play, and connect.
        </p>
      </div>
    </main>
  );
};

export default About;
