import "./image_card.scss";
import img from "../../Images/model-profile/model.png";

const ImageCard = () => {
  return (
    <div id="img_card">
      <img src={img} alt="profileimage" />
    </div>
  );
};

export default ImageCard;
