import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review-box">
      <div>
        <img class="rounded-circle h-75 w-75" src={review.img} alt="/"></img>
      </div>
      <div>
        <h4 class="text-center p-5">{review.review}</h4>
      </div>
    </div>
  );
};

export default Review;
