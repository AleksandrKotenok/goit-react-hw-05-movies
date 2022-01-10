import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieById } from "../../API/api";

export const MovieDetailsPage = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const apiMovieById = async () => {
      try {
        const data = await MovieById(movieId);
        //console.log("data", data);
        setDetails(data);
      } catch (e) {
        console.error(e);
      }
    };
    apiMovieById();
  }, [movieId]);
  console.log("details", details);
  //const year = details.release_date.slice(0, 4);
  return (
    <div>
      <h1>
        {details.title} ({details.release_date})
      </h1>
      <p>{movieId}</p>
    </div>
  );
};
// {
//   match: {
//     params: { movieId },
//   },
// }
