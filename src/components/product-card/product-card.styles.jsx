import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 170px;
  height: 225px;
  position: relative;
  background: white;
  padding: 10px 8px;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  &:hover {
    img {
      transform: scale(1.08);
    }
  }
  img {
    width: 100%;
    height: 116px;
  }
  p {
    font-weight: 500;
    margin: 0px 0px 16px 0px;
  }
  span {
    font-weight: 500;
    font-size: 13px;
    margin: 2px 0;
  }
`;
