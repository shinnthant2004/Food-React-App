import styled, { css } from "styled-components";
const shrinkLabelStyles = css`
  font-size: 13px;
`;
export const FormInputLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 15px;
  position: absolute;
  top: -18px;
  transition: 300ms ease all;
`;
export const Input = styled.input`
  outline: none;
  text-decoration: none;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 7px;
  margin-top: 10px;

  &:focus {
    border: 2px solid #86198f;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;
export const Group = styled.div`
  margin: 40px 0;
  position: relative;
  input[type="file"] {
    background: white;
    padding: 10px 15px;
  }
`;
