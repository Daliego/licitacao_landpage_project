import React from "react";
import { Container } from "./style";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  backgroudImage?: string;
}

export function Card({ children, backgroudImage, ...props }: CardProps) {
  return (
    <Container
      style={{ backgroundImage: backgroudImage ? backgroudImage : undefined }}
      {...props}
    >
      {children}
    </Container>
  );
}
