import styled from "styled-components";

export const LayoutProducts = styled.div`
  margin: 20px auto;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 25px;
  row-gap: 40px;
`;
