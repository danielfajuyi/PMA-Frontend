import VideItem from "./VideoItem";

// "./videos/video (1).mp4",
// "./videos/video (2).mp4",
// "./videos/video (3).mp4",
// "./videos/video (4).mp4",
// "./videos/video (1).mp4",
// "./videos/video (2).mp4",
// "./videos/video (3).mp4",
// "./videos/video (4).mp4"

function ModelVideo({ item, activeDisplay, displayLimit, handleDisplay }) {
  return (
    <section className="section video-section">
      <h2 className="video__title">Model's Videos</h2>
      <ul className="videoList">
        {item.videos.map((video, index) =>
          activeDisplay !== "videos"
            ? index <= 3 && <VideItem key={index} video={video} />
            : index <= displayLimit - 1 && (
                <VideItem key={index} video={video} />
              )
        )}
      </ul>
      <p
        style={{ display: item.videos.length > 1 && "none" }}
        className="empty-content-text"
      >
        Sorry, Model is yet to post a Video.
      </p>
      <button
        id="videos"
        onClick={handleDisplay}
        style={{ display: item.videos.length <= 4 && "none" }}
        className="view-more-btn on-hover"
      >
        {activeDisplay === "videos" && displayLimit > 4
          ? "view Less"
          : "view All"}
      </button>
    </section>
  );
}

export default ModelVideo;
