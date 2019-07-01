import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'


function Card(props) {
  const img = {
    backgroundImage: 'url(http://image.tmdb.org/t/p/w500/' + props.data.poster_path + ')', 
  }
  const id = props.data.id;

  return (
    <div className="card">
      <Link to={{
        pathname: '/movie/' + id,
        state: {...props}
      }}>
        <div className="thumbnail">
          <div className="thumbnail__container">
            <div className="thumbnail__container">
              <div className="thumbnail__img" style={img} ></div>
              <div className="thumbnail__content">
                <p><FontAwesomeIcon icon={faStar} /> { props.data.vote_average} </p>
                <p><FontAwesomeIcon icon={faUserFriends} /> { props.data.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="thumbnail__title">{props.data.title}</h3>
      </Link>
  
    </div>    

  );
}

export default Card;
