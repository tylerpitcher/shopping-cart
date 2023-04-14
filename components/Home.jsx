import ProductList from '@/components/product/ProductList';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

function Home({ products }) {
  const links = [
    { text: 'About', href: '#about' },
    { text: 'Products', href: '#products' },
  ];

  return (
    <div>
      <Header links={links}/>
      <main>
        <Hero/>
        <ProductList products={products}/>
      </main>
    </div>
  );
}

export default Home;
