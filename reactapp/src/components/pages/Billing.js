import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Billing = () => {
  const [stockData, setStockData] = useState([
    { id: 1, name: 'Product 1', quantity: 10, price: 50 },
    { id: 2, name: 'Product 2', quantity: 15, price: 40 },
    { id: 3, name: 'Product 3', quantity: 20, price: 30 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (item) => {
    if (item.quantity > 0) {
      const updatedStockData = stockData.map((stockItem) => {
        if (stockItem.id === item.id) {
          return { ...stockItem, quantity: stockItem.quantity - 1 };
        }
        return stockItem;
      });
      setStockData(updatedStockData);
      setCartItems([...cartItems, item]);
      setTotalAmount(totalAmount + item.price);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    const updatedStockData = stockData.map((stockItem) => {
      if (stockItem.id === item.id) {
        return { ...stockItem, quantity: stockItem.quantity + 1 };
      }
      return stockItem;
    });
    setStockData(updatedStockData);
    setCartItems(updatedCartItems);
    setTotalAmount(totalAmount - item.price);
  };

  return (
    <div className="container  mt-5"style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}>
    
      <div className="row">
        <div className="col-md-6">
        <center>
          <h2 style = {{color : 'white'}}>Stock Available</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleAddToCart(item)}
                      disabled={item.quantity === 0}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </center>
        </div>
      </div>
      <center>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2 style = {{color : 'white'}}> Cart</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromCart(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-amount">
            <h4 style = {{color : 'white'}}> Total Amount: ${totalAmount}</h4>
          </div>
          <div className="payment-options">
            <h4 style = {{color : 'white'}}> Payment Options</h4>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" id="creditCard" value="creditCard" />
              <label className="form-check-label" htmlFor="creditCard" style = {{color : 'white'}}>
                Credit Card
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" id="paypal" value="paypal" />
              <label className="form-check-label" htmlFor="paypal" style = {{color : 'white'}}>
                PayPal
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" id="cashOnDelivery" value="cashOnDelivery" />
              <label className="form-check-label" htmlFor="cashOnDelivery" style = {{color : 'white'}}>
                Cash on Delivery
              </label>
            </div>
            <button className="btn btn-primary mt-3">Proceed to Payment</button>
          </div>
         
        </div>
      </div>
      </center>
    </div>
  );
};

export default Billing;
