import "./reviews_card.scss";
import profileImg from "../../../Images/model-profile/model.png";

const ReviewsCard = () => {
  return (
    <div id="reviews_card">
      <header>
        <div id="img_holder">
          <img src={profileImg} alt="profile image" />
        </div>
        <div>
          <div id="name">{"Aaron Loeb"}</div>
          <div id="date">{"01 Jan 2023"}</div>
        </div>
      </header>
      <div id="body">
        <div id="title">{"PREMIUM MODEL APP IS THE BEST!!!"}</div>
        <div id="note">
          {
            "I have been using this platform for a while now and it has all the features I need to market myself to potential clients."
          }
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
