import React, { useEffect, useState } from "react";
import GridGifItem from "./GridGifItem";
import { useFethcGifs } from "../hooks/useFetchGifs";

const GridGif = ({ category }) => {
  const { data: images, loading } = useFethcGifs(category);

  return (
    <>
      {loading && (
        <p className="animate__animated animate__bounce animate__flash">
          Loading
        </p>
      )}
      <h3 className="animate__animated animate__bounce animate__fadeIn">
        {category}
      </h3>
      <div className="car-grid">
        {images.map((img) => (
          <GridGifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GridGif;
