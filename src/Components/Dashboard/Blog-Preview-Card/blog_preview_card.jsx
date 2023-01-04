import "./blog_preview_card.scss";

const BlogPreviewCard = (props) => {
  return (
    <div className="blog_preview_card">
      <div className="author_img">
        <img src={props.img} alt="author image" />
      </div>
      <div className="body">
        <div className="blog_title">{props.title}</div>
        <div className="blog_info">
          <span className="model">{props.model}</span>
          <span className="date">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
