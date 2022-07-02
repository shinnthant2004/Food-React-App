import {
  DirectoryItemContainer,
  Image,
  DescriptionContainer,
} from "./directory-item.styles";
const DirectoryItem = ({ category }) => {
  const { title, image, description } = category;
  return (
    <DirectoryItemContainer>
      <Image imageUrl={image} />
      <DescriptionContainer>
        <p>{title}</p>
        <span>{description}</span>
      </DescriptionContainer>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
