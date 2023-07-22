import ProductItem from './ProductItem';
import classes from './Products.module.css'
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p1"
          title='Chips'
          price={6}
          description='Tasy chips!'
        />
        <ProductItem
          id="p2"
          title='Beans'
          price={4}
          description='A Stable diet!'
        />
      </ul>
    </section>
   );
};

export default Products;
