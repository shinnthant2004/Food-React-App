import { TextInput } from "./search-input.styles";
const SearchInput = ({ ...otherProps }) => {
  return (
    <TextInput
      {...otherProps}
      type="text"
      placeholder="What are you looking..."
    />
  );
};
export default SearchInput;
