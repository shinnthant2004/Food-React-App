import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer, TopRatedProducts } from "./directory.styles";
const Directory = () => {
  const Categories = [
    {
      title: "Fast Food",
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Breakfast Food",
      image:
        "https://images.pexels.com/photos/11121828/pexels-photo-11121828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Vegetables",
      image:
        "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Drinks",
      image:
        "https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <DirectoryContainer>
      <TopRatedProducts>
        <span>Most Popolar items</span>
        <button>Top Rated</button>
      </TopRatedProducts>
      <div>
        {Categories.map((category) => (
          <DirectoryItem title={category.title} />
        ))}
      </div>
    </DirectoryContainer>
  );
};
export default Directory;
