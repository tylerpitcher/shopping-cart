function Product({ product }) {
  const { title, price } = product;

  return (
    <div>
      <h3>{title}</h3>
      <span>{price.toPriceString()}</span>
    </div>
  );
}

export default Product;
