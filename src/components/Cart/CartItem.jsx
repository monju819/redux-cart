const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  return (
    <li>
      <div className="flex justify-between mb-4">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          ${total.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          x <span>{quantity}</span>
        </div>
        <div className="flex gap-x-5">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
