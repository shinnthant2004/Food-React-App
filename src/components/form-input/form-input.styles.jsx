import styled from "styled-components";
export const FormInputLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 15px;
  position: absolute;
  top: -18px;
  input[type="file"] {
    left: 0;
    top: 0;
    opacity: 0;
    position: absolute;
    font-size: 90px;
  }
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
    transform: scale(0.9);
  }
`;
export const Group = styled.div`
  margin: 40px 0;
  position: relative;
`;
