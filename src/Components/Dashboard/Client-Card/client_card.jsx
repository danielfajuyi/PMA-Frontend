import "./client_card.scss";

const ClientCard = (props) => {
  return (
    <div className="client_card">
      <div className="profile_img">
        <img src={props.img} alt="client-img" />
      </div>
      <div className="details">
        <div className="post">{props.post}</div>
        <div className="name">{props.name}</div>
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
};

export default ClientCard;
