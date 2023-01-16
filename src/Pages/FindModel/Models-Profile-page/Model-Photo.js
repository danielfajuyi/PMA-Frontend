import ImgItem from "./ImgItem";
import { ViewBtn } from "./Buttons";

function ModelPhoto({ photos, activeDisplay, displayLimit, handleDisplay, viewAll }) {
  return (
    <section className="section photo-section">
      {/* photo display section */}
      <ul className="imgList">
        {photos.map((photo, index) =>
          activeDisplay !== "photos" ? (
            index <= displayLimit - 1 && <ImgItem key={index} img={photo} />
          ) : activeDisplay === "photos" && !viewAll ? (
            index <= displayLimit - 1 && <ImgItem key={index} img={photo} />
          ) : (
            <ImgItem key={index} img={photo} />
          )
        )}
      </ul>

      {/* No photo posted yet */}
      <div style={{ display: photos.length > 1 && "none" }} className="empty-content-text">
        Sorry, Model is yet to post a Photo.
      </div>

      {/* photo display btn section */}
      {photos.length > displayLimit && (
        <ViewBtn
          id="photos"
          handleDisplay={handleDisplay}
          btnText={activeDisplay === "photos" && viewAll ? "view Less" : "view All"}
        />
      )}
    </section>
  );
}

export default ModelPhoto;
