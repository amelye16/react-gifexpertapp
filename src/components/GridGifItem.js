const GridGifItem = ({ id, title, image }) => {
  return (
    <div className="card animate__animated animate__bounce animate__fadeIn">
      <img src={image} alt={title} />
      <p> {title}</p>
    </div>
  );
};

export default GridGifItem;
