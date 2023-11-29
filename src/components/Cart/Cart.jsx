import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <>
      <h2 className="text-2xl mb-3 flex justify-center text-white">
        Your Shopping Cart
      </h2>
      <section className=" mx-auto flex justify-center">
        <ul className="list-none p-5 m-0 bg-[#313131] text-white w-[480px]  mb-11">
          <CartItem
            item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
          />
        </ul>
      </section>
    </>
  );
};

export default Cart;
