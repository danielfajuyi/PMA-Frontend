function StatItem({ keyText, value }) {
  return (
    <li className="stat__item">
      <span className="bold-text">{keyText}:</span> <span>{value}</span>
    </li>
  );
}

export default StatItem;
