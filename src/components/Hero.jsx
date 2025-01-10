import React from "react";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const buttons = [
    { label: "Shop Now", path: "/shop" },
    { label: "Contact Us", path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 2, x: 0 },
  };

  return (
    <main className="overflow-hidden text-white text-center md:text-left py-5 px-5 md:px-20 lg:px-40 md:w-[60%] flex flex-col gap-2 md:mt-[10%]">
      <motion.div
        className="text-4xl md:text-5xl flex flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={childVariants} className="font-bold">
          GAME ON
        </motion.h1>
        <motion.p variants={childVariants} className="text-base md:text-lg">
          Level up with gear you've been eyeing all year. Treat yourself to the
          ultimate gaming experience.
        </motion.p>
        <motion.h2 variants={childVariants} className="font-bold">
          BUY ONE, GET ONE 25% OFF
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ y: "100vh", opacity: "0" }}
        animate={{ y: 0, opacity: "1" }}
        animateBtn={{ duration: 1, ease: easeInOut }}
        className="md:flex gap-5 items-center"
      >
        {buttons.map((button) => (
          <button
            className=" mt-5 w-full md:w-auto bg-black font-semibold p-3 border-2 transition duration-300 border-black rounded-md hover:bg-transparent hover:text-black hover:border-black hover:border-2 text-center"
            onClick={() => handleNavigate(button.path)}
            key={button.label}
          >
            {button.label}
          </button>
        ))}
      </motion.div>
    </main>
  );
};

export default Hero;
