import { InteractiveBtn } from "./Buttons";

function ModelInfo({ item, handleForm }) {
  return (
    <section className="section model-info">
      <div className="model__img-container">
        <img className="model__img" src={item.image} alt="" width="400" height="400" />
      </div>
      <div className="model-Info__text-content">
        <span className="top-text">
          <h2 className="model__name">
            {item.firstName} {item.secondName}
          </h2>
          <i className="fa-solid fa-circle-check check-icon"></i>
        </span>
        <p className="model__rating">
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
        </p>
        <p className="model__category semi-bold">
          {item.category[0]} and {item.category[1]} Model
        </p>

        <p className="model__location">
          <i className="fa-solid fa-location-dot model__location-icon"></i>
          <span className="bold-text">
            {item.state}, {item.country}
          </span>
        </p>
        <p>
          <span className="bold-text">Agency:</span>
          <span className="agency__name semi-bold">{item.agency}</span>
        </p>

        <div className="interactive-section">
          <div className="btn-container">
            <InteractiveBtn btnText="Favourite" btnIcon="fa-solid fa-heart heart-icon Icon" />
          </div>
          <div className="btn-container">
            <InteractiveBtn btnText="Follow" btnIcon="fa-solid fa-user-plus follow-icon Icon" />
          </div>
          <div className="btn-container insta-full-text">
            <InteractiveBtn btnText="Instagram" btnIcon="fa-brands fa-instagram insta-icon Icon" />
          </div>
          <div className="btn-container insta-text">
            <InteractiveBtn btnText="Insta" btnIcon="fa-brands fa-instagram insta-icon Icon" />
          </div>
          <div className="btn-container">
            <InteractiveBtn btnIcon="fa-solid fa-share-nodes share-icon Icon" />
          </div>
        </div>
        <div className="model__activities">
          <p>
            <strong>Favourite: </strong>78
          </p>
          <p>
            <strong>Views:</strong> 365
          </p>
          <p>
            <strong>Followers:</strong> 237
          </p>
          <p>
            <strong>Last login:</strong> This month
          </p>
        </div>

        <button onClick={handleForm} className="cta-btn dark--btn bold-text on-hover">
          <i className="fa-solid fa-envelope-circle-check Icon"></i>
          Book model
        </button>
      </div>
    </section>
  );
}
export default ModelInfo;
