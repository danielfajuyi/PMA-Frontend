import "./view_reviews.scss";
import ReviewsCard from "../../../../Components/Dashboard/Reviews-Card/reviews_card";
import FadeIn from "../../../../Components/FadeIn/fade_in";

const buttons = (
  <div id="buttons">
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

const Reviews = () => {
  return (
    <FadeIn>
      <div id="view_reviews">
        <div id="container">
          <ReviewsCard />
          {buttons}
          <ReviewsCard />
          {buttons}
        </div>
      </div>
    </FadeIn>
  );
};

export default Reviews;
