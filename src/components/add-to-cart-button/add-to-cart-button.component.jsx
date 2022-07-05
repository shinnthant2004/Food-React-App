import { AddCartButton } from "./add-to-cart-button.styles";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
const AddToCartButton = ({ ...otherProps }) => {
  return (
    <AddCartButton {...otherProps}>
      <PlusIcon />
    </AddCartButton>
  );
};
export default AddToCartButton;
