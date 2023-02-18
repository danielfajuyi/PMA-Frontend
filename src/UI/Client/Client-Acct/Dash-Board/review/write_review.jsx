import FadeIn from "../../../../Components/FadeIn/fade_in";
import "./write_review.scss";

const WriteReview = () => {
  return (
    <FadeIn>
      <div id="write_review">
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="This is the title..."
          />
          <label htmlFor="post">Post</label>
          <textarea
            name="post"
            placeholder="Type post here..."
            id="post"
            cols="30"
            rows="10"
          ></textarea>
          <div id="buttons">
            <button>Cancel</button>
            <button>Publish</button>
          </div>
        </form>
      </div>
    </FadeIn>
  );
};

export default WriteReview;
