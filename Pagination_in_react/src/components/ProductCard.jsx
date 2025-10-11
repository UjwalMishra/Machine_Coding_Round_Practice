function ProductCard({ val }) {
  return (
    <div className="ProductCard">
      <img src={val.thumbnail} alt={val.title} />
      <div className="ProductTextContent">
        <div>Id : {val.id}</div>
        <div>Title : {val.title}</div>
        <div>Category : {val.category}</div>
      </div>
    </div>
  );
}

export default ProductCard;
