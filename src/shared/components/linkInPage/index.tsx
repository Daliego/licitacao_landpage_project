import { Text } from "./style";

interface LinkInPageProps extends React.HTMLAttributes<HTMLDivElement> {
  // top: number;
  // left: number;
  // behavior?: "smooth" | "auto" | undefined;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  selectedBorder?: boolean;
}

export function LinkInPage({ onClick, children }: LinkInPageProps) {
  return <Text onClick={onClick}>{children}</Text>;
}
