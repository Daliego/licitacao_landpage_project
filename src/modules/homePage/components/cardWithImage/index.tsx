import { useEffect } from "react";
import { Img } from "../../../../shared/components/image/index";
import { Container, Main } from "./style";

interface CardWithImageProps {
  icon?: string;
  children?: string;
}

export function CardWithImage({ children, icon }: CardWithImageProps) {
    // useEffect(() => {
    //     children.rep
    // }, [children]);

  return (
    <Main>
      <Container>
        <Img src={icon} />
      </Container>
      <Container>{children}</Container>
    </Main>
  );
}
