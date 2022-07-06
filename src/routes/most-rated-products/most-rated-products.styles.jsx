import styled from "styled-components";

export const LayoutProducts = styled.div`
  width: 1240px;
  margin: 20px auto;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 25px;
  row-gap: 25px;
`;
