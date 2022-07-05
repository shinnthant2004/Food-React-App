import { DividerContainer, LeftDivider, RightDivider } from "./divider.styles";

const Divider = () => {
  return (
    <DividerContainer>
      <LeftDivider />
      <span>or</span>
      <RightDivider />
    </DividerContainer>
  );
};
export default Divider;
