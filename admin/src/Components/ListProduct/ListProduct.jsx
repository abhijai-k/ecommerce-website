// ListProduct.jsx
import React, { useState, useEffect } from 'react';
import './ListProduct.css';

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={`http://localhost:4000${product.image}`} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.new_price}</p>
            {product.old_price && <p className="old-price">Old Price: ₹{product.old_price}</p>}
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ListProduct;
