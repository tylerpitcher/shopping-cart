function Product({ product }) {
  const { img, title, price } = product;

  return (
    <div>
      <h3>{title}</h3>
      <span>{price.toPriceString()}</span>
    </div>
  );
}

export default Product;
