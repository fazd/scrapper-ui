import React, {useState} from 'react';
import './Home.scss';
import Header from '../../components/Navbar/Navbar';
import Graph from '../../components/Graph/Graph';
import { FormControl, Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { searchDates } from '../../services/api';

const Home = () => {

  const [link, setLink] = useState('');
  const [open, setOpen] = useState(false); 

  const onSubmit = async () => {
    if(link) {
      const response = await searchDates({link});
      console.log("response", response);
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
  }


  return (
    <>
      <div className="main-container">
        <Header />
        <Container className="mt-4">
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center mb-3">Busca tu producto</h2>
            <Col className="w-75 my-2">
              <span className="">Pega o escribe el link del producto que quieras buscar</span>
              <FormControl
                type="text"
                placeholder="Buscar..."
                className="mr-sm-2 mt-2"
                onChange={(e) => setLink(e.target.value)}
              />
            </Col>
            <Col className="w-75">
              <Collapse in={open}>
                <div className="text-danger">
                  Por favor digite un link valido
                </div>
              </Collapse>            
            </Col>
            <Col className="my-2 d-flex flex-row justify-content-center">
              <Form.Control as="select" className=" w-25 me-4">
                <option value="Alkosto">Alkosto</option>
              </Form.Control>
              <Button
                variant="primary"
                className="divider"
                onClick={onSubmit}  
              >Search</Button>                  
            </Col>
          
          </Row>
          <Row className="my-4 w-100">
            <Col className="graph mb-5 w-100">
              <h3>Resultado </h3>
              <div className="d-flex flex-column">
                <span>Precio más Bajo: {0}</span>
                <span>Precio más alto: {0}</span>
              </div>
              <Graph />
            </Col>
          </Row>
          <Row className="mt-5" id="about">
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