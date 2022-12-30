import VideItem from "./VideoItem";
import { ViewBtn } from "./Buttons";

function ModelVideo({ videos, activeDisplay, displayLimit, handleDisplay, viewAll }) {
  return (
    <section className="section video-section">
      <ul className="videoList">
        {videos.map((video, index) =>
          activeDisplay !== "videos" ? (
            index <= displayLimit - 1 && <VideItem key={index} video={video} />
          ) : activeDisplay === "videos" && !viewAll ? (
            index <= displayLimit - 1 && <VideItem key={index} video={video} />
          ) : (
            <VideItem key={index} video={video} />
          )
        )}
      </ul>

      {/* No video posted yet */}
      <p style={{ display: videos.length > 1 && "none" }} className="empty-content-text">
        Sorry, Model is yet to post a Video.
      </p>

      {/* video display btn section */}
      {videos.length > displayLimit && (
        <ViewBtn
          id="videos"
          handleDisplay={handleDisplay}
          btnText={activeDisplay === "videos" && viewAll ? "view Less" : "view All"}
        />
      )}
    </section>
  );
}

export default ModelVideo;
