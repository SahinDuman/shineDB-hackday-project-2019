import React, { useState, useEffect } from 'react';
import Flex from './Flex-container';

const apiKey = `${process.env.REACT_APP_API_KEY}`;

function Home(props) {
  const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1';
  const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1&region=en';
  const upComingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1';

  const [popularData, setPopularData] = useState(null);
  const [topRatedData, setTopRatedData] = useState(null);
  const [upComingData, setUpComingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const popularFetch = await fetch(popularUrl).then(val => val.json());
      const topRatedFetch = await fetch(topRatedUrl).then(val => val.json());
      const upComingFetch = await fetch(upComingUrl).then(val => val.json());

      setPopularData(popularFetch.results);
      setTopRatedData(topRatedFetch.results);
      setUpComingData(upComingFetch.results);
    };
    fetchData()
  }, []);
  
  return (
      <div>
        <h2 className="h2">Popular movies</h2>
        <Flex data={popularData} />
        <h2 className="h2">Top Rated movies</h2>
        <Flex data={topRatedData} />
        <h2 className="h2">Upcoming movies</h2>
        <Flex data={upComingData} />
      </div>
  );
}

export default Home;
