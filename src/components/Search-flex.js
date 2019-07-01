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
      <div className="search-grid">
        {cardArr}
      </div>
  );
}

export default Flex;
