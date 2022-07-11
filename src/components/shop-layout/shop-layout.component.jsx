import { Outlet } from "react-router-dom";
import { Sidebar, Layout, CategoryList } from "./shop-layout.styles";
import { Categories } from "../directory/directory.component";
const ShopLayout = () => {
  return (
    <Layout>
      <div>
        <Sidebar>
          <CategoryList to="/shop">Most Popular</CategoryList>
          {Categories.map((category) => (
            <CategoryList key={category.title} to={category.route}>
              {category.title}
            </CategoryList>
          ))}
        </Sidebar>
      </div>
      <Outlet />
    </Layout>
  );
};
export default ShopLayout;
