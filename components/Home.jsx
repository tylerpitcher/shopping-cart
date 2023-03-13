import Product from '@/components/Product';

function Home({ products }) {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.title}>
            <Product product={product}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
