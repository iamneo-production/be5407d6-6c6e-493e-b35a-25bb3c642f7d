import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const orders = [
  {
    id: 1,
    productName: 'Product 1',
    amountPaid: 100,
    invoiceLink: 'path/to/invoice1',
    shippingDetails: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'City 1',
      state: 'State 1',
      zip: 'ZIP 1',
      country: 'Country 1',
    },
  },
  {
    id: 2,
    productName: 'Product 2',
    amountPaid: 80,
    invoiceLink: 'path/to/invoice2',
    shippingDetails: {
      name: 'Jane Smith',
      address: '456 First Avenue',
      city: 'City 2',
      state: 'State 2',
      zip: 'ZIP 2',
      country: 'Country 2',
    },
  },
  {
    id: 3,
    productName: 'Product 3',
    amountPaid: 120,
    invoiceLink: 'path/to/invoice3',
    shippingDetails: {
      name: 'Michael Johnson',
      address: '789 Second Street',
      city: 'City 3',
      state: 'State 3',
      zip: 'ZIP 3',
      country: 'Country 3',
    },
  },
  {
    id: 4,
    productName: 'Product 4',
    amountPaid: 150,
    invoiceLink: 'path/to/invoice4',
    shippingDetails: {
      name: 'Sarah Lee',
      address: '987 Third Road',
      city: 'City 4',
      state: 'State 4',
      zip: 'ZIP 4',
      country: 'Country 4',
    },
  },
  {
    id: 5,
    productName: 'Product 5',
    amountPaid: 90,
    invoiceLink: 'path/to/invoice5',
    shippingDetails: {
      name: 'David Johnson',
      address: '654 Fourth Lane',
      city: 'City 5',
      state: 'State 5',
      zip: 'ZIP 5',
      country: 'Country 5',
    },
  },
  // Add more orders to the 'orders' array as needed
];

const Order = () => {
  return (
    <div className="container py-5">
  <center> <h2  style = {{ color:'white'}}>Order Details</h2></center>   
      <table className="table table-dark table-bordered table-striped">
        <thead >
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Amount Paid</th>
            <th>Invoice</th>
            <th>Shipping Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>${order.amountPaid}</td>
              <td>
                <a href={order.invoiceLink} target="_blank" rel="noopener noreferrer">
                  View Invoice
                </a>
              </td>
              <td>
                <address>
                  {order.shippingDetails.name}
                  <br />
                  {order.shippingDetails.address}
                  <br />
                  {order.shippingDetails.city}, {order.shippingDetails.state} {order.shippingDetails.zip}
                  <br />
                  {order.shippingDetails.country}
                </address>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
