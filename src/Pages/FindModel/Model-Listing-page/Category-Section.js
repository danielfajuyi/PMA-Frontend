import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <section className="category-section">
      <h2 className="category-title">Modeling Categories</h2>
      <ul className="categories">
        <CategoryItem img="./images/model (1).jpg" text="Run way" />
        <CategoryItem img="./images/model (20).jpg" text="Child" />
        <CategoryItem img="./images/model (2).jpg" text="Fashion" />
        <CategoryItem img="./images/model (14).jpg" text="Plus size" />
        <CategoryItem img="./images/model (4).jpg" text="Fitness" />
      </ul>
    </section>
  );
}

export default Categories;
