import { Img } from "../../../../shared/components/image";
import { ButtonContainer, Container, ContainerCell, Main } from "./style";
import felipeProfile from "../../../../assets/images/felipe-profile.jpg";
import { ButtonToPosition } from "../button";
import { WordColored } from "../../style";
import { Button } from "../button/style";
import { sizes } from "../../../../assets/staticSizes/size";

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
          Olá, eu sou André Filipe, um Arquiteto especializado em Gestão
          Pública, com mais de uma década de experiência como funcionário
          público, trilhei um caminho diversificado dentro do universo das
          licitações, desde a análise das necessidades dos órgãos públicos até a
          gestão e fiscalização dos contratos resultantes.
        </ContainerCell>
        <ContainerCell>
          Ao longo dos meus 12 anos de trajetória, acumulei um conhecimento
          valioso e profundo sobre cada etapa do processo de licitação. Minhas
          jornadas e formações acadêmicas me permitiram adquirir uma perspectiva
          única e abrangente sobre as complexidades e desafios enfrentados neste
          meio, tornando-me um especialista em navegar por esse cenário com
          maestria.
        </ContainerCell>
        <ContainerCell>
          Atualmente, estou dedicado à missão de assessorar e arquitetos que
          aspiram a ingressar no mercado lucrativo das vendas para o Governo.
          Como <WordColored>GESTOR DE LICITAÇÕES</WordColored>, meu papel vai de
          fornecer orientações até a participação durante todo o processo
          licitatório.
        </ContainerCell>
        <ContainerCell>
          Se você está interessado em saber mais sobre como pode maximizar suas
          oportunidades no mercado de licitações governamentais e alcançar novos
          patamares de sucesso como arquiteto, estou aqui para ajudar. Vamos
          conversar e explorar juntos possibilidades pouco exploradas por
          arquitetos.
        </ContainerCell>

        <ButtonContainer>
          <Button
            style={{
              width: sizes.buttonSize,
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
