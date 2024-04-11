import Faq from "react-faq-component";
import { Main } from "./styles";
import "./style.css";

const data = {
  // title: "O que mais nos perguntam",
  rows: [
    {
      title:
        "Por que é importante para arquitetos participarem de licitações governamentais?",
      content: `Participar de licitações governamentais pode abrir novas oportunidades de trabalhar em projetos de grande escala, garantindo contratos estáveis com o setor público e possibilidades de escalar o negócio.`,
    },
    {
      title:
        "Quais são os benefícios de contratar um Gestor de Licitações para arquitetos?",
      content:
        "Um Gestor de Licitações especializado pode oferecer orientação especializada desde organização da documentação, participação em todo o processo licitatório e até a gestão de contratos, maximizando as chances de sucesso e eliminando os riscos de erros ou penalidades.",
    },
    {
      title:
        "Como posso me preparar para participar de licitações governamentais como arquiteto?",
      content: `É essencial entender os requisitos do processo licitatório, preparar uma proposta competitiva e garantir que sua documentação esteja em ordem. Além disso, buscar orientação de um especialista em licitações pode ser fundamental para aumentar suas chances de sucesso.`,
    },
    {
      title:
        " Quais são os principais desafios enfrentados pelos arquitetos ao participar de licitações governamentais?",
      content: (
        <p>
          Os principais desafios incluem a falta de informações, a complexidade
          dos processos burocráticos e a necessidade de garantir conformidade
          com os requisitos legais e técnicos estabelecidos pelos
          órgãos públicos.
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "blue",
  rowTitleColor: "black",
  rowContentPaddingRight: "10%",
  // arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

export function FaqComponent() {
  return (
    <Main>
      <Faq data={data} styles={styles} config={config} />
    </Main>
  );
}
