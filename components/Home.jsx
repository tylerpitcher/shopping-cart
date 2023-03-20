import ProductList from '@/components/product/ProductList';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

function Home({ products }) {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <ProductList products={products}/>
      </main>
    </div>
  );
}

export default Home;
