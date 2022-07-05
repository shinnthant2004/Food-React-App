import styled from "styled-components";
export const BaseButton = styled.button`
  padding: 12px 10px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  background-color: #f97316;
  font-weight: bold;
  color: white;
  width: 100%;
  letter-spacing: 1px;

  &:hover {
    background-color: #fff;
    color: #f97316;
  }
`;
export const InvertButton = styled(BaseButton)`
  background-color: #fff;
  color: #f97316;

  &:hover {
    background-color: #f97316;
    color: #fff;
  }
`;
