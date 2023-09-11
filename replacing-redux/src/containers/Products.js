import React from 'react';
import ProductItem from '../components/Products/ProductItem';
import {useStore} from '../hook-store/store';
import './Products.css';


const Products = props => {

  // const productList = useContext(ProductsContext).products

  const state = useStore()[0];

  console.log(state);
  
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
