import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const MovieData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSbaHY1eUda0G5tnGMhkKFzRJePk8H4rBaS7HY43F6XwhpoC4nNOTE6Xt-_Tdl6RM62WRhPpODm0pAG/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []); // Empty dependency array means this effect will run only once on initial render

  return (
    <ul>
      {data.map((movieData) => (
        <li key={movieData.movie}>
          {movieData.movie} ({movieData.year}) - Rating {movieData.rating}
        </li>
      ))}
    </ul>
  );
};

export default MovieData;
