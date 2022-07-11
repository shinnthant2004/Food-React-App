import styled from "styled-components";
export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-radius: 5px;
  background: #fb923c;
  img {
    width: 50px;
  }
  margin: 5px 0;
`;
export const SaleText = styled.div`
  diplay: flex;
  & > span:first-child {
    display: block;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
  & > span:last-child {
    display: block;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
