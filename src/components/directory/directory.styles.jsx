import styled from "styled-components";

export const DirectoryContainer = styled.div`
  padding: 50px;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;

export const TopRatedProducts = styled.div`
  width: 250px;
  height: 580px;
  position: relative;
  border-radius: 6px;
  background-image: url("http://metropolitanhost.com/themes/themeforest/react/quickmunch/static/media/Banner-12.d8c574d2.jpg");
  span {
    width: 200px;
    background: white;
    padding: 8px;
    border-radius: 5px;
    color: black;
    position: absolute;
    top: 16px;
    right: 24px;
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
