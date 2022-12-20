function ModelBio({ item }) {
  return (
    <section className="section bio-section">
      <h2 className="bio__title">Model's Bio</h2>
      <p className="bio__text">{item.bio}</p>
    </section>
  );
}

export default ModelBio;
