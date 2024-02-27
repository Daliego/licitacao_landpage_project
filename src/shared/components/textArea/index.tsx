/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage } from "@hookform/error-message";
import {
  TextAreaComponent,
  TextAreaContainer,
  TextAreaErrorMessage,
} from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name: string;
  placeholder?: string;
  byForm: any;
  flex?: number;
}

export function TextArea({
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
    <TextAreaContainer style={{ width: props.style?.width }}>
      <TextAreaComponent
        id={id}
        flex={flex}
        placeholder={placeholder}
        rows={9}
        {...register(name)}
        {...props}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <TextAreaErrorMessage>{message}</TextAreaErrorMessage>
        )}
      />
    </TextAreaContainer>
  );
}
