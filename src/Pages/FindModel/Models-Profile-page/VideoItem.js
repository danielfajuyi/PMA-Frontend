function VideItem({ video }) {
  return (
    <li className="videoItem">
      <video className="video" width="320" height="240" controls>
        <source src={video} type="video/mp4"></source> Your browser does not
        support the video tag.
      </video>
    </li>
  );
}

export default VideItem;
