function ModelStats({ item }) {
  const { stats, jobInterest, gender } = item;

  let statsList = [
    "height",
    "waist",
    "bust",
    "chest",
    "hip",
    "shoulder",
    "eyes",
    "size",
    "shoe",
    "tattoos",
    "gender",
    "skinColor",
    "hairColor",
    "hairLength",
    "ethnicity",
    "language",
    "availableForTravel",
  ];

  return (
    <section className="section stat-section">
      {/* stats section  */}

      <ul className="stat__list">
        {statsList.map((stat) => {
          if (gender.toLowerCase() === "male") {
            return (
              stat !== "hip" &&
              stat !== "bust" && (
                <li key={stat} className="stat__item">
                  <span className="semi-bold">{stat}:</span> <span>{stats[stat]}</span>
                </li>
              )
            );
          } else if (gender.toLowerCase() === "female") {
            return (
              stat !== "chest" &&
              stat !== "shoulder" && (
                <li key={stat} className="stat__item">
                  <span className="semi-bold">{stat}:</span> <span>{stats[stat]}</span>
                </li>
              )
            );
          }
          return true;
        })}
      </ul>

      {/* job interest section */}

      <h2 className="stat__title">Jobs Interested In</h2>
      <ul className="job__list">
        {jobInterest.map((job) => (
          <li className="job__item" key={job}>
            {job}
          </li>
        ))}
      </ul>

      {/* compCard section */}
      <button type="download" className="compCard-btn dark--btn bold-text">
        Download CompCard
      </button>
    </section>
  );
}
export default ModelStats;
