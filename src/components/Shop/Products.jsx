import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <>
      <h2 className="text-2xl mb-3 flex justify-center text-white">
        Buy your favorite products
      </h2>
      <section className=" mx-auto flex justify-center">
        <ul className="bg-white w-[640px]">
          <ProductItem
            title="Test"
            price={6}
            description="This is a first product - amazing!"
          />
        </ul>
      </section>
    </>
  );
};

export default Products;
