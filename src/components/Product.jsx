import { useState } from "react";
import React from "react";

function Product() {
  const [ProductCard, setProductCard] = useState([
    {
      name: "Apple",
      price: "20",
      Contry: "India",
    },
    {
      name: "Mango",
      price: "20",
      Contry: "India",
    },
    {
      name: "Orange",
      price: "16",
      Contry: "India",
    },
    {
      name: "Lichi",
      price: "55",
      Contry: "India",
    },
    {
      name: "Banana",
      price: "88",
      Contry: "India",
    },
    {
      name: "Pinapple",
      price: "45",
      Contry: "India",
    },
    {
      name: "Banana",
      price: "88",
      Contry: "India",
    },
    {
      name: "Pinapple",
      price: "45",
      Contry: "India",
    },
    {
      name: "Banana",
      price: "88",
      Contry: "India",
    },
    {
      name: "Pinapple",
      price: "45",
      Contry: "India",
    },
  ]);
  return (
    <>
      <div className="container" id="bg">
        <div className="bdr">
          <div className="row">
            {ProductCard.map((item) => (
              <div className="col-3 bdr2">
                <h1>{item.name}</h1>
                <h4>₹{item.price}</h4>
                <h5>{item.Contry}</h5>
                <button className="" id="view">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
