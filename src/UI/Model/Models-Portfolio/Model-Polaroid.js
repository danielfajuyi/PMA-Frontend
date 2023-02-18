import ImgItem from "./ImgItem";
import { ViewBtn } from "./Buttons";

function ModelPolaroid({ polaroids, activeDisplay, displayLimit, handleDisplay, viewAll }) {
  return (
    <section className="section polaroid-section">
      {/* image display section  */}
      <ul className="imgList">
        {polaroids.map((polaroid, index) =>
          activeDisplay !== "polaroids" ? (
            index <= displayLimit - 1 && <ImgItem key={index} img={polaroid} />
          ) : activeDisplay === "polaroids" && !viewAll ? (
            index <= displayLimit - 1 && <ImgItem key={index} img={polaroid} />
          ) : (
            <ImgItem key={index} img={polaroid} />
          )
        )}
      </ul>

      {/* No image posted yet */}

      <div style={{ display: polaroids.length > 1 && "none" }} className="empty-content-text">
        Sorry, Model is yet to post a Polaroid.
      </div>

      {/* display  Btn section */}

      {polaroids.length > displayLimit && (
        <ViewBtn
          id="polaroids"
          handleDisplay={handleDisplay}
          btnText={activeDisplay === "polaroids" && viewAll ? "view Less" : "view All"}
        />
      )}
    </section>
  );
}

export default ModelPolaroid;
