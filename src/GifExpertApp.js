import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GridGif from "./components/GridGif";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GridGif key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
