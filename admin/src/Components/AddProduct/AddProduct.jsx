import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.png';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: ""
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    try {
      console.log(productDetails);
      let responseData;
      let product = { ...productDetails }; // Create a copy to avoid mutations

      // Prepare form data for image upload
      let formData = new FormData();
      formData.append('product', image);

      // Upload image
      const uploadResponse = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData,
      });

      // Check for a successful response
      if (!uploadResponse.ok) throw new Error("Image upload failed");
      responseData = await uploadResponse.json();

      if (responseData.success) {
        product.image = responseData.image_url; // Use the returned image URL

        // Add product to the database
        const addProductResponse = await fetch('http://localhost:4000/api/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResponse.json();
        addProductData.success ? alert("Product Added") : alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: " + error.message);
    }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Old Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="number" name="old_price" placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>New Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="number" name="new_price" placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="lock">Locks</option>
          <option value="tool">Tools</option>
          <option value="accessory">Accessories</option>
        </select>
      </div>
      <div className="add-product-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;
