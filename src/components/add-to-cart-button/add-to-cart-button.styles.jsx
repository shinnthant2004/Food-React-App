import styled from "styled-components";
export const AddCartButton = styled.button`
  top: 118px;
  right: 11px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background-color: #fb923c;
  color: white;
  border: none;
  position: absolute;
  &:before {
    content: "";
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 23px;
    color: #fff;
    background: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlY2YwZjEiPjxwYXRoIGQ9Ik04Mi41NiwzMC45NnY1MS42aC01MS42djYuODhoNTEuNnY1MS42aDYuODh2LTUxLjZoNTEuNnYtNi44OGgtNTEuNnYtNTEuNnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==")
      center / contain no-repeat;
  }
`;
