import { Link } from "react-router-dom";
import styled from "styled-components";

export const DirectoryContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 1300px;
`;

export const TopRatedProducts = styled(Link)`
  width: 250px;
  height: 518px;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  background-image: url("http://metropolitanhost.com/themes/themeforest/react/quickmunch/static/media/Banner-12.d8c574d2.jpg");
  &:hover {
    box-shadow: 1px 2px 3px 1px rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
    background-size: 100%;
  }
  span {
    width: 195px;
    background: white;
    padding: 8px;
    border-radius: 5px;
    color: black;
    position: absolute;
    top: 16px;
    right: 25px;
    text-align: center;
    font-weight: 600;

    &:hover {
      background: orange;
      color: white;
    }
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 25px;
    width: 80%;
    font-weight: 600;
    padding: 10px 0;
    border-radius: 8px;
    border: 1px solid orange;
  }
`;
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  margin-left: 56px;
`;

export const Title = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.8705882352941177);
  margin-top: 20px;
`;
