import { Group, FormInputLabel, Input } from "./form-input.styles";
const FormInput = ({ label, children, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormInputLabel>{label}</FormInputLabel>
    </Group>
  );
};
export default FormInput;
