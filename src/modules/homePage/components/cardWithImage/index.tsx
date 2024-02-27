import { Img } from "../../../../shared/components/image/index";
import { Container, Main } from "./style";

interface CardWithImageProps {
  icon?: string;
  children?: React.ReactNode;
}

export function CardWithImage({ children, icon }: CardWithImageProps) {
  return (
    <Main>
      <Container>
        <Img src={icon} />
      </Container>
      <Container>{children}</Container>
    </Main>
  );
}
