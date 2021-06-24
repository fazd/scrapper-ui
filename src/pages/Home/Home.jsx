import React, {useState} from 'react';
import './Home.scss';
import Header from '../../components/Navbar/Navbar';
import { FormControl, Container, Row, Col, Form, Button } from 'react-bootstrap';


const Home = () => {

  const [link, setLink] = useState('');

  return (
    <>
      <div className="main-container">
        <Header />

        <Container className="mt-4">
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center mb-3">Busca tu producto</h2>
            <Col xs={8} className="my-2">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Col>
            <Col className="my-2 d-flex flex-row justify-content-center">
              <Form.Control as="select" className=" w-25 me-4">
                <option value="Alkosto">Alkosto</option>
              </Form.Control>
              <Button variant="primary" className="divider">Search</Button>                  
            </Col>
          
          </Row>
          
          <Row className="mt-5">
            <Col>
              <h3 className="text-center mb-3">¿De qué trata este proyecto?</h3>
              <p>
                Este proyecto fue realizado con la intención de trackear los precios de los productos en 
                las tiendas colombianas (Por ahora solo alkosto), De tal manera que si una persona quiere hacer
                una compra y no está segura si el "descuento" es en realidad un descuento real, la persona podrá
                introducir el link en la página y observar cuál ha sido el precio diario que ha manejado el producto
              </p>
            
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
};

export default Home;