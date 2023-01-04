function ImgItem({ img }) {
  return (
    <li className="imgItem">
      <img className="image" src={img} alt="" width="250" height="300" />
    </li>
  );
}

export default ImgItem;
