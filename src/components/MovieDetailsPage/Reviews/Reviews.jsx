import { useParams } from "react-router-dom";
import { Reviews } from "../../../API/api";
import { useState, useEffect } from "react";

import s from "../Reviews/Reviews.module.css";

export const Review = () => {
  const [review, setReview] = useState("");
  const { movieId } = useParams();
  useEffect(() => {
    const apiReviews = async () => {
      try {
        const data = await Reviews(movieId);
        setReview(data);
      } catch (e) {
        console.error(e);
      }
    };
    apiReviews();
  }, [movieId]);
  return (
    <div>
      {review && (
        <ul>
          {review.map((rev) => (
            <li key={rev.id}>
              <p className={s.author}>{rev.author}</p>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!review.length && <p>No review</p>}
    </div>
  );
};
