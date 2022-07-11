import {
  DropDownContainer,
  Ender,
  Header,
  ItemsContainer,
} from "./drop-down.styles";

const DropDown = () => {
  return (
    <DropDownContainer>
      <Header>
        <p>Your Carts</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${20}px` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Header>
      <ItemsContainer />
      <Ender>
        <span>Total : $ 500</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${26}px` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Ender>
    </DropDownContainer>
  );
};
export default DropDown;
