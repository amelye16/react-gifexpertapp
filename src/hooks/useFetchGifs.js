import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFethcGifs = (category) => {
  //este un estado que se está retornando
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [category]);

  return state; // { data: [], loading: true}
};
