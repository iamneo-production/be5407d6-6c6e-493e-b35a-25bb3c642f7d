import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const InventoryDashboard = () => {
  return (
    <Container className="container py-5"style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}>
      <Row>
        <Col md={4} className='mx-auto'>
          <Card>
            <Card.Body>
              <Card.Title>Total Items</Card.Title>
              <Card.Text>500</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>In Stock</Card.Title>
              <Card.Text>350</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Out of Stock</Card.Title>
              <Card.Text>150</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Stock Table</Card.Title>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Stock Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product A</td>
                    <td>100</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Product B</td>
                    <td>50</td>
                    <td>$20</td>
                  </tr>
                  <tr>
                    <td>Product C</td>
                    <td>200</td>
                    <td>$15</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InventoryDashboard;