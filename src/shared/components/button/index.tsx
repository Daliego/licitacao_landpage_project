import { Button, Image } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClinck?: () => void;
}

export function ButtonToInternalPage({
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
