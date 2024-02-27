import { Button } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  onClinck?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function ButtonToPosition({
  children,
  onClinck,
  ...props
}: ButtonProps) {
  return (
    <Button onClick={onClinck} {...props}>
      {children}
    </Button>
  );
}
