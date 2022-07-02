import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  width: 425px;
  height: 240px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  border-radius: 10px;
  &:hover {
    box-shadow: 1px 2px 3px 1px rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 70%;
  background-size: cover;
  border-radius: 10px 10px 0 0;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const DescriptionContainer = styled.div`
  padding: 10px 16px;

  p {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.54);
  }
`;
