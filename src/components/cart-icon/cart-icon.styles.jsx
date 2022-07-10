import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/cart.svg";
export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 5px;
`;

export const IconCart = styled(Icon)`
  width: 40px;
  height: 40px;
`;
