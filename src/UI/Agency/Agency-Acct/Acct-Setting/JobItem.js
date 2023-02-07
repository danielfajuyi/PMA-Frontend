function JobItem({ item, index, handleClick }) {
  return (
    <li className="set_photo--item on-hover">
      <img src={item} alt="" />
      <div className="photo--icons">
        <i
          onClick={() => handleClick("view", index)}
          className="fa-solid fa-arrow-up-right-from-square view--icon"
        ></i>
        <i
          onClick={() => handleClick("trash", index)}
          className="fa-regular fa-trash-can trash--icon"
        ></i>
      </div>
    </li>
  );
}

export default JobItem;
