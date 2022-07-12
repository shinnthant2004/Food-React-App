import styled from "styled-components";
export const CheckoutItemContainer = styled.div`
  display: flex;
  background: white;
  width: 800px;
  height: 125px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  border-radius: 20px;
  margin: 15px auto;
  position: relative;
`;
export const Description = styled.div`
  padding: 0 20px;
  width: 355px;
  span {
    font-size: 15px;
    font-weight: 500;

    & ~ p {
      margin-top: 8px;
    }
  }
  & > p:last-child {
    margin: 10px 0 0 0;
    font-size: 14px;
    font-weight: 500;
    color: green;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const Image = styled.div`
  width: 150px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  border-bottom-right-radius: 20px;
`;
export const ActionButton = styled.button`
  background: #d4d4d8;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  width: 44px;
  height: 41px;
  border: none;
  border-radius: 5px;
`;
export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > ${ActionButton}:first-child {
    margin-right: 15px;
  }
  & > ${ActionButton}:last-child {
    margin-left: 15px;
  }
`;
export const Price = styled.span`
  width: 100px;
  margin: auto;
  margin-left: 57px;
  font-size: 18px;
  font-weight: 500;
`;
export const Trash = styled.div`
  position: absolute;
  top: 81px;
  right: 10px;
  width: 33px;
  line-height: 46px;
  height: 33px;
  text-align: center;
  background: #d4d4d8;
  border-radius: 16px 0px 8px 0px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
`;
