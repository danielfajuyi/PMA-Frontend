function FilterItem({ itemText, handleFilter }) {
  return (
    <li onClick={handleFilter} className="filter-item on-hover">
      {itemText}
    </li>
  );
}

export default FilterItem;
