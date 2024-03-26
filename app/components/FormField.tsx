import { FormFieldProps } from "@/types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  control,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...control.register(name)}
    />
  </>
);
export default FormField;