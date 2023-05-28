import ProductList from '@/components/product/ProductList';
import Header from '@/components/base/Header';
import Hero from '@/components/home/Hero';

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
