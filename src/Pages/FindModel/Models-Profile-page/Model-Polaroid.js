import ImgItem from "./ImgItem";

function ModelPolaroid({ item, activeDisplay, displayLimit, handleDisplay }) {
  return (
    <section className="section polaroid-section">
      <h2 className="polaroid__title">Model's Polaroids</h2>
      <ul className="imgList">
        {item.polaroids.map((polaroid, index) =>
          activeDisplay !== "polaroids"
            ? index <= 3 && <ImgItem key={index} img={polaroid} />
            : index <= displayLimit - 1 && (
                <ImgItem key={index} img={polaroid} />
              )
        )}
      </ul>
      <div
        style={{ display: item.polaroids.length > 1 && "none" }}
        className="empty-content-text"
      >
        Sorry, Model is yet to post a Polaroid.
      </div>
      <button
        id="polaroids"
        onClick={handleDisplay}
        style={{ display: item.polaroids.length <= 4 && "none" }}
        className="view-more-btn on-hover"
      >
        {activeDisplay === "polaroids" && displayLimit > 4
          ? "view Less"
          : "view All"}
      </button>
    </section>
  );
}

export default ModelPolaroid;
