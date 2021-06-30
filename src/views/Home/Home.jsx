import React, { useState } from 'react';
import './Home.scss';
import Header from '../../components/Navbar/Navbar';
import Graph from '../../components/Graph/Graph';
import {
  FormControl,
  Container,
  Row,
  Col,
  Form,
  Button,
  Collapse,
  Spinner
} from 'react-bootstrap';
import { searchDates, searchAvg } from '../../services/api';
import PriceCard from '../../components/Price-Card/Price-Card';
import { formatDate, getActualIcon, percentageProm } from '../../utils';

const Home = () => {

  const [link, setLink] = useState('');
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (link) {
      setIsLoading(true);
      const response = await searchDates({ link });
      if (response) {
        let pr = response.product;
        if (!response.product?.average) {
          const average = await searchAvg({ link });
          console.log(average);
          pr.average = average[0].avg;
          console.log(pr.average);

        }
        setProduct(pr);
        setData(parseData(response.product.name, response.data));
        setIsLoading(false);
      }
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
  }




  const parseData = (name, info) => {
    const newData = info.map((element) => {
      const dd = new Date(element.date);

      return {
        y: element.price,
        x: formatDate(dd),
      }
    });
    console.log({
      id: name,
      data: newData,
    });
    return [{
      id: name,
      data: newData,
    }];
  }

  return (
    <>
      <div className="main-container">
        <Header />
        <Container className="mt-4">
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center mb-3">Busca tu producto</h2>
            <Col xs="12" className="w-75 my-2">
              <span className="">Pega o escribe el link del producto que quieras buscar</span>
              <FormControl
                type="text"
                placeholder="Buscar..."
                className="mr-sm-2 mt-2"
                onChange={(e) => setLink(e.target.value)}
              />
            </Col>
            <Col xs="12" className="w-100">
              <Collapse in={open}>
                <div className="text-danger">
                  Por favor digita un link valido
                </div>
              </Collapse>
            </Col>
            <Col md="4" xs="8" className="my-2 d-flex flex-row justify-content-center">
              <Form.Control as="select" className="w-75 me-4">
                <option value="Alkosto">Alkosto</option>
              </Form.Control>
              <Button
                variant="primary"
                className="divider"
                onClick={onSubmit}
              >{isLoading ? <Spinner animation="border" variant="primary" size="sm" />
                : 'Search'}
              </Button>
            </Col>

          </Row>
          {product?.name && !isLoading ? <>
            <Row className="my-4 w-100 d-flex flex-wrap">
              <Col xs="12">
                <h3 className="mb-5">Resultado del producto</h3>
              </Col>
              <Col xs="12">
                <h4 className="text-center">{product.name}</h4>
              </Col>
            </ Row>
            <Row className="d-flex ml-3">
              <Row className="mr-3">
                <Col xs="12" md="3" className="d-flex justify-content-start align-items-center mt-4 mb-4">
                  <img src={product.imageUrl} alt={product.name} className="img rounded-img" />
                </Col>
              </Row>
              <Row className="d-flex justify-content-center align-items-center w-75 ">
                <Col xs="12" md="5">
                  <PriceCard
                    className="my-3 mx-2 w-40"
                    status={'up'}
                    cardName="más alto"
                    val={product.maximunPrice}
                    prom={percentageProm(product.average, product.maximunPrice)}
                  />
                </Col>
                <Col xs="12" md="5">
                  <PriceCard
                    className="my-3 mx-2 w-40"
                    status={'down'}
                    cardName="más bajo"
                    val={product.minimunPrice}
                    prom={percentageProm(product.average, product.minimunPrice)}
                  />
                </Col>
                <Col xs="12" md="5">
                  <PriceCard
                    className="my-3 mx-2 w-40"
                    status={'equal'}
                    cardName="Promedio"
                    val={product.average}
                    prom={percentageProm(product.average, product.average)}
                  />
                </Col>
                {product ? <Col xs="12" md="5">
                  <PriceCard
                    className="my-3 mx-2 w-40"
                    status={getActualIcon(product)}
                    cardName="Actual"
                    val={product.minimunPrice}
                    prom={percentageProm(product.average, product.maximunPrice)}
                  />
                </Col>: null}
              </Row>
            </Row>
            <Row>
              <Col>
                <div className="graph w-100">
                  <Graph dataInfo={data} />
                </div>
              </Col>
            </Row>
          </> : null}
          <Row className="mt-5 pb-4" id="about">
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