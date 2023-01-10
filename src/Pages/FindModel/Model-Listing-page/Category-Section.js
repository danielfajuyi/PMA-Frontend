// import CategoryItem from "./CategoryItem";
import Sectionhead from "../../../Components/SectionHead/sectionhead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryLabel from "../../../Components/CategoryLabel/CategoryLable";

const CategoryItems = [
  {
    id: 1,
    img: "./images/model-category/runway.jpg",
    category: "Runway",
  },

  {
    id: 2,
    img: "./images/model-category/child.jpg",
    category: "Child",
  },

  {
    id: 3,
    img: "./images/model-category/fashion.jpg",
    category: "Fashion",
  },

  {
    id: 4,
    img: "./images/model-category/commercial.jpg",
    category: "Commercial",
  },

  {
    id: 5,
    img: "./images/model-category/plus-size.jpg",
    category: "Plus Size",
  },

  {
    id: 6,
    img: "./images/model-category/plus-size.jpg",
    category: "Fitness",
  },

  {
    id: 7,
    img: "./images/model-category/plus-size.jpg",
    category: "Glamour",
  },

  {
    id: 8,
    img: "./images/model-category/plus-size.jpg",
    category: "Petite",
  },

  {
    id: 9,
    img: "./images/model-category/plus-size.jpg",
    category: "Swimsuit",
  },

  {
    id: 10,
    img: "./images/model-category/plus-size.jpg",
    category: "Commercial",
  },

  {
    id: 11,
    img: "./images/model-category/plus-size.jpg",
    category: "Promotional",
  },

  {
    id: 12,
    img: "./images/model-category/plus-size.jpg",
    category: "Editorial",
  },
];

const CategoryItemsSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <article className="categories-wrapper">
      <Slider {...settings}>
        {CategoryItems &&
          CategoryItems.map(({ id, img, category }) => {
            return (
              <div key={id} className="categories-slide">
                <div className="categories-item">
                  <img src={img} alt={category} />
                  <div>
                    <h3>Category:</h3>
                    <CategoryLabel lable={category} id="modelcategory-lable" />
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </article>
  );
};
function Categories() {
  return (
    <section className="category-section container">
      {/* <h2 className="category-title">Modeling Categories</h2> */}
      <Sectionhead title="Categories" description="Our Models" />

      {/* <ul className="categories">
        <CategoryItem img="./images/model (1).jpg" text="Runway" />
        <CategoryItem img="./images/model (20).jpg" text="Child" />
        <CategoryItem img="./images/model (2).jpg" text="Fashion" />
        <CategoryItem img="./images/model (14).jpg" text="Plus size" />
        <CategoryItem img="./images/model (4).jpg" text="Fitness" />
      </ul> */}

      <CategoryItemsSlider />
    </section>
  );
}

export default Categories;
