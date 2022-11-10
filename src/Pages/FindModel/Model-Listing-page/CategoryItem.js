function CategoryItem({ img, text }) {
  return (
    <li className="category">
      <img
        className="category--img"
        src={img}
        alt=""
        width="200"
        height="250"
      />
      <p>{text}</p>
    </li>
  );
}

export default CategoryItem;
