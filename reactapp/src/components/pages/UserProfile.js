import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserProfile = () => {
  return (
    <Container className="text-center" style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}>
    
      <Row>
        <Col md={6} className="mx-auto">
        <center>
          <Card>
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Card.Text>
                <strong>Name:</strong> John Doe
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> john.doe@example.com
              </Card.Text>
              <Card.Text>
                <strong>Alternative Email:</strong> john.alternate@example.com
              </Card.Text>
              <Card.Text>
                <strong>Company Name:</strong> ABC Corporation
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> New York, USA
              </Card.Text>
              <Card.Text>
                <strong>Pincode:</strong> 12345
              </Card.Text>
              <Button variant="primary">Edit Profile</Button>
            </Card.Body>
          </Card>
          </center>
        </Col>
      </Row>
      
    </Container>
  );
}

export default UserProfile;
