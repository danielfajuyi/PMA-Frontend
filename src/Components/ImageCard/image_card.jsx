import "./image_card.scss";
import profileImg from "../../Images/jobs/job2.jpg";

const ImageCard = () => {
  return (
    <div id="img_card">
      <img src={profileImg} alt="profile image" />
    </div>
  );
};

export default ImageCard;
