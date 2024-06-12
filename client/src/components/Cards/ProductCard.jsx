function ProductCard({name, description, image}) {
  return (
    <>
      <div className="card w-60 h-80 border-solid border-2 flex justify-between flex-col  ">
        <img className="h-2/3 w-auto aspect-auto" src={`/img/${image[0]}`} alt={image} />
        <ul>
          <li>{name}</li>
          <li>{description}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default ProductCard;
