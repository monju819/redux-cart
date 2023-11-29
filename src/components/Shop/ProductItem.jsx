const ProductItem = ({ title, price, description }) => {
  return (
    <li className="p-3">
      <header className="flex justify-between mb-3">
        <h3>{title}</h3>
        <div>${price.toFixed(2)}</div>
      </header>
      <p>{description}</p>
      <div className="flex justify-end mb-3">
        <button>Add to Cart</button>
      </div>
    </li>
  );
};

export default ProductItem;
