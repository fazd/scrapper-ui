import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import AnimatedNumber from "animated-number-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Price-Card.scss';

const formatValue = value => `$${Number(value).toFixed(2)}`;
const percValue = value => `${Number(value).toFixed(2)}%`;


export default function PriceCard({val=0, cardName, status='equal', prom=0, className}) {
  
  const green = "#118C4F";
  const red = "#DC143C";
  const gray = "#ACACAC";

  const direction = {
    up: {
      icon: faCaretUp,
      color: green,
    },
    down: {
      icon: faCaretDown,
      color: red,
    },
    equal: {
      icon: faMinus,
      color: gray,
    }
  }

  return (
    <Card className={className}>
      <Card.Body className="">
        <h4>Precio {cardName}</h4>
        <AnimatedNumber
          value={val}
          formatValue={formatValue}
          duration={800}
          className="mr-1"
        /> 

        <span className="mt-2">
        <FontAwesomeIcon icon={direction[status].icon} color={direction[status].color} className="ml-2 mr-1" />  
          <AnimatedNumber
            value={prom}
            formatValue={percValue}
            duration={800}
          />
        </span>
      </Card.Body>
    </Card>
  );
};

PriceCard.propTypes = {
  value: PropTypes.number,
  cardName: PropTypes.string.isRequired,
  status: PropTypes.string,
  percentage: PropTypes.number,
}

