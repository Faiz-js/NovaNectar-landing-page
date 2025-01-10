import React from "react";
import Card from "./Card";
import { items } from "./Items";

const Shop = () => {
  return (
    <>
      <h1 className="bg-black text-white text-center text-2xl md:text-3xl lg:text-4xl py-5 md:py-10 font-semibold">
        Get amazing deal on our products
      </h1>
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:px-40 px-5 py-3 gap-5">
        {items.map((i) => (
          <Card
            key={i.id}
            name={i.name}
            image={i.image}
            description={i.description}
            price={i.price}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
