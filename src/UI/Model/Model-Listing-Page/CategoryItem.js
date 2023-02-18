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
      <h3>{text}</h3>
    </li>
  );
}

export default CategoryItem;
