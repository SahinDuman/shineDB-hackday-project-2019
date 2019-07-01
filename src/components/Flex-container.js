import React from 'react';
import Card from './Card';

function Flex(props) {

  let cardArr = [];
  if (props.data) {
    props.data.forEach(e => {
      cardArr.push(<Card key={e.id} data={e} />)
    })
  }

  return (
      <div className="flex-container">
        {cardArr}
      </div>
  );
}

export default Flex;
