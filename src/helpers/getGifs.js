import React from "react";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=9woRfZjp0KQwDr6TT4hhop6mcqdfcSoJ`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      image: img.images.downsized_medium.url,
      title: img.title,
    };
  });

  return gifs;
};
