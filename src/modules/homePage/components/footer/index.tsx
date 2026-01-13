import { ThemeProvider } from "styled-components";
import { Link, Main, Text } from "./style";
import { AiFillMail, AiFillInstagram } from "react-icons/ai";
import { collorPallete } from "../../../../assets/colors/colors";

export function Footer() {
  const handleClick = () => {
    const element = document.getElementById("Header")!;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Main>
      <ThemeProvider theme={{ hoverColor: `${collorPallete.orange}` }}>
        <Link target="_blank" href="https://daliego.github.io/portfolio-case-studies/">©Araujo, 2021 - Todos os direitos reservados</Link>
        <Link target="_blank" href="https://www.instagram.com/licitacaoarq">
          <AiFillInstagram size={25} color="white" />
          <Text>Licitacaoarq</Text>
        </Link>
        <Link target="_blank" href="mailto:licitacaoarq@licitacaoarq.com">
          <AiFillMail size={25} color="white" />
          <Text>Email</Text>
        </Link>
        <Text onClick={handleClick}>Voltar ao início</Text>
      </ThemeProvider>
    </Main>
  );
}
