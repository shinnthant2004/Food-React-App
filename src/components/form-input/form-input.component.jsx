import { Group, FormInputLabel, Input } from "./form-input.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormInputLabel>{label}</FormInputLabel>}
    </Group>
  );
};
export default FormInput;
