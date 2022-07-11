import styled from "styled-components";

export const LayoutProducts = styled.div`
  margin: 0;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 25px;
  row-gap: 40px;
  span {
    margin: 30px 0;
    font-weight: 500;
    font-size: 15px;
  }
`;
