import { Img } from "../../../../shared/components/image";
import { ButtonContainer, Container, ContainerCell, Main } from "./style";
import felipeProfile from "../../../../assets/images/felipe-profile.jpg";
import { ButtonToPosition } from "../button";
import { WordColored } from "../../style";
import { Button } from "../button/style";

interface HowAmIProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const HowAmI = ({ onClick }: HowAmIProps) => {
  return (
    <Main>
      <Container>
        <Img
          height={"100%"}
          width={"100%"}
          src={felipeProfile}
          style={{ borderRadius: "25px" }}
        />
      </Container>
      <Container>
        <ContainerCell>
          Meu nome é André Filipe, sou Arquiteto e especialista em Gestão
          Pública, em 12 anos como funcionário público já trabalhei em todas as
          etapas de uma licitação, desde a análise das necessidades do órgão, o
          lançamento dos editais até a gestão e fiscalização dos contratos.
        </ContainerCell>
        {/* <ContainerCell>
          Meu nome é André Filipe, sou Arquiteto e especialista em Gestão
          Pública, em 12 anos como funcionário público já trabalhei em todas as
          etapas de uma licitação, desde a análise das necessidades do órgão, o
          lançamento dos editais até a gestão e fiscalização dos contratos.
          Meu nome é André Filipe, sou Arquiteto e especialista em Gestão
          Pública, em 12 anos como funcionário público já trabalhei em todas as
          etapas de uma licitação, desde a análise das necessidades do órgão, o
          lançamento dos editais até a gestão e fiscalização dos contratos.
        </ContainerCell> */}
        <ContainerCell>
          Atualmente sou <WordColored>GESTOR DE LICITAÇÕES</WordColored> para
          arquitetos que querem entrar no mercado lucrativo das vendas para o
          Governo. Quer saber mais?
        </ContainerCell>
        <ButtonContainer>
          <Button
            style={{
              width: "40%",
            }}
            onClick={onClick}
          >
            Saiba mais
          </Button>
        </ButtonContainer>
      </Container>
      {/* <Container>
        <ButtonToPosition></ButtonToPosition>
      </Container> */}
    </Main>
  );
};
