import { Fragment } from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import {
  DirectoryContainer,
  TopRatedProducts,
  CategoryContainer,
  Title,
} from "./directory.styles";
export const Categories = [
  {
    title: "Fast Foods",
    description: "Pizzas, Buggars",
    image:
      "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "/shop/fast foods",
  },
  {
    title: "Meals",
    description: "Breakfast, Lunch & Dinner",
    image:
      "https://images.pexels.com/photos/11121828/pexels-photo-11121828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "/shop/meals",
  },
  {
    title: "Vegetables",
    description: "Clean & Flesh",
    image:
      "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    route: "/shop/vegetables",
  },
  {
    title: "Drinks",
    description: "Hydrated & Gases provided",
    image:
      "https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    route: "/shop/drinks",
  },
];

const Directory = () => {
  return (
    <Fragment>
      <Title>Expore our collections</Title>
      <DirectoryContainer>
        <TopRatedProducts to="shop">
          <span>Most Popolar items</span>
          <button>Top Rated</button>
        </TopRatedProducts>
        <CategoryContainer>
          {Categories.map((category) => (
            <DirectoryItem key={category.title} category={category} />
          ))}
        </CategoryContainer>
      </DirectoryContainer>
    </Fragment>
  );
};
export default Directory;
