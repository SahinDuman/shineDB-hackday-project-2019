import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'

function Movie(props) {

  const data = props.location.state.data;
  const img = 'http://image.tmdb.org/t/p/original/' + data.backdrop_path;

  return (
    <div>
      <div className="movie-container">
        <div className="movie-bg" >
          <img src={img} alt="movie-bg" className="movie-img" />
        </div>
        <div className="experiment">
          <div className="movie-content-container">
            <div className="movie-content__title-box">
              <h1>{data.title}</h1>
            </div>
            <p>{data.overview}</p>
            <p><FontAwesomeIcon icon={faStar} />  {data.vote_average}</p>
            <p><FontAwesomeIcon icon={faUserFriends} /> {data.vote_count}</p>
          </div>
        </div>
      </div>
    </div>

  );

}

export default Movie;