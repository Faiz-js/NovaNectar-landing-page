import React from "react";

const Card = ({ name, image, description, price }) => {
  return (
    <section className="flex flex-col justify-between border-2 rounded-md p-2">
      <img src={image} alt="Product Image" className="bg-gray-200 rounded-md hover:cursor-pointer"/>
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="text-slate-500 text-sm">{description}</p>
      <p>${price}</p>
      <button className="bg-[#00b8fc] text-white py-2 rounded-md">Buy Now</button>
    </section>
  )
};

export default Card;
