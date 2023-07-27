import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockTable = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', date: '' });

  const fetchStock = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/stocks');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    }
  };

  useEffect(() => {
    fetchStock();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/stocks', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', quantity: '', date: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/stocks/${productId}`);
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdateProduct = async (productId) => {
    try {
      await axios.put(`http://localhost:8080/api/stocks/${productId}`, newProduct);
      const updatedProducts = products.map((product) =>
        product.id === productId ? { ...product, ...newProduct } : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="container py-5"style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}>
      <h1 className="text-center mb-4" style = {{color : 'white'}}>Stock Table</h1>
      <table className="table table-bordered table-hover style = {{backgroundColor : '#e400fd', color:'white', borderRadius:'20px', marginRight: '150px', marginLeft: '150px', marginBottom: '50px', marginTop: '50px' }}">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.date}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm mr-2"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="mt-4" style = {{color : 'white'}}>Add Product</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label style = {{color : 'white'}}>Name:</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <label style = {{color : 'white'}}>Price:</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <label style = {{color : 'white'}}>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label >Date:</label>
            <input
              type="date"
              name="date"
              value={newProduct.date}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-md-3">
        <div className="form-group">
          <button className="btn btn-success btn-block" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StockTable;
