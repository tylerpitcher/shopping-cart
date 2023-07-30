import ProductList from '@/components/product/ProductList';
import useScreenStore from '@/stores/screenStore';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import Hero from '@/components/home/Hero';

function Home({ products }) {
  const { mobile } = useScreenStore();

  return (
    <div>
      <Header/>
      <main>
        {!mobile && <Hero/>}
        <ProductList products={products}/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
