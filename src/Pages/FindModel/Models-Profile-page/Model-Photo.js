import ImgItem from "./ImgItem";

function ModelPhoto({ item, activeDisplay, displayLimit, handleDisplay }) {
  return (
    <section className="section photo-section">
      <h2 className="photo__title">Model's Photos</h2>
      <ul className="imgList">
        {item.photos.map((photo, index) =>
          activeDisplay !== "photos"
            ? index <= 3 && <ImgItem key={index} img={photo} />
            : index <= displayLimit - 1 && <ImgItem key={index} img={photo} />
        )}
      </ul>
      <div
        style={{ display: item.photos.length > 1 && "none" }}
        className="empty-content-text"
      >
        Sorry, Model is yet to post a Photo.
      </div>
      <button
        id="photos"
        onClick={handleDisplay}
        style={{ display: item.photos.length <= 4 && "none" }}
        className="view-more-btn on-hover"
      >
        {activeDisplay === "photos" && displayLimit > 4
          ? "view Less"
          : "view All"}
      </button>
    </section>
  );
}

export default ModelPhoto;
