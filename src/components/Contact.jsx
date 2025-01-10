import React, { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
  };

  return (
    <>
      <main className="bg-zinc-950 text-white">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold py-5 md:py-10">
          Contact us
        </h1>
      </main>
      <div className="backdrop-blur-md bg-white/30 mx-5 md:mx-20 lg:mx-40 mt-10 rounded-lg p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              className="p-2 rounded-md text-black outline-none"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="First Name"
            />
            <input
              className="p-2 rounded-md text-black outline-none"
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={input.lastname}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <input
              className="p-2 rounded-md text-black outline-none"
              type="email"
              placeholder="Email Address"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <input
              className="p-2 rounded-md text-black outline-none"
              type="text"
              placeholder="Location"
              name="location"
              value={input.location}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <textarea
            className="h-40 mt-5 w-full p-2 rounded-md text-black outline-none"
            placeholder="Enter your description"
            name="description"
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#00b8fc] w-full md:w-fit hover:scale-95 md:hover:scale-110 px-10 py-5 rounded-md mt-5 text-white transform duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
