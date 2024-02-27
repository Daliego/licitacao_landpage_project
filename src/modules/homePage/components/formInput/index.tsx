/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputComponent, InputContainer, InputErrorMessage } from "./style";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  placeholder?: string;
  byForm: any;
  flex?: number;
}

export function Input({
  id,
  placeholder,
  flex,
  name,
  byForm: currentForm,
  ...props
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = currentForm;

  return (
    <InputContainer style={{ width: props.style?.width }}>
      <InputComponent
        id={id}
        flex={flex}
        placeholder={placeholder}
        {...register(name)}
        {...props}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <InputErrorMessage>{message}</InputErrorMessage>
        )}
      />
    </InputContainer>
  );
}
