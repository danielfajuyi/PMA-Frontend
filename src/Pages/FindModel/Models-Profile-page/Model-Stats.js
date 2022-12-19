import StatItem from "./StatsItem";

function ModelStats({ item }) {
  return (
    <section className="section stat-section">
      <h2 className="stat__title">Model's Stats</h2>
      <ul className="stat__list">
        <StatItem keyText="Height" value={item.stats.height} />
        <StatItem keyText="Waist" value={item.stats.waist} />
        <StatItem keyText="Bust" value={item.stats.bust} />
        <StatItem keyText="Hip" value={item.stats.hip} />
        <StatItem keyText="Eyes" value={item.stats.eyes} />
        <StatItem keyText="Size" value={item.stats.size} />
        <StatItem keyText="Shoe" value={item.stats.shoe} />
        <StatItem keyText="Tattoos" value={item.stats.tattoos} />
        <StatItem keyText="Gender" value={item.stats.gender} />
        <StatItem keyText="Hair color" value={item.stats.hairColor} />
        <StatItem keyText="Hair length" value={item.stats.hairLength} />
        <StatItem keyText="Ethnicity" value={item.stats.ethnicity} />
        <StatItem keyText="Skin color" value={item.stats.skinColor} />
        <StatItem keyText="Language" value={item.stats.language} />
        <StatItem
          keyText="Available For Travel"
          value={item.stats.availableForTravel}
        />
      </ul>
      <div className="stat__comment">
        <ul className="jobInterestList">
          <span className="bold-text">Jobs Interested In:</span>
          {item.jobInterest.map((job) => (
            <li key={job}>
              {job}
              {/* this function only dose the job of indenting the list of job interest */}
              {item.jobInterest.indexOf(job) === item.jobInterest.length - 1 ? (
                "."
              ) : item.jobInterest.indexOf(job) ===
                item.jobInterest.length - 2 ? (
                <span className="and">and</span>
              ) : (
                <span className="comer">,</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <button className="download-btn dark--btn bold-text">
        Download Comp Card
      </button>
    </section>
  );
}
export default ModelStats;
