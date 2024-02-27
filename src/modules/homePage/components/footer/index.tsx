import { ThemeContext, ThemeProvider } from "styled-components";
import { LinkInPage } from "../../../../shared/components/linkInPage";
import { LinkToExternalPage } from "../../../../shared/components/linkToExternalPage";
import { Main, Text } from "./style";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { collorPallete } from "../../../../assets/colors/colors";

export function Footer() {
  const handleClick = () => {
    const element = document.getElementById("Header")!;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Main>
      <ThemeProvider theme={{ hoverColor: `${collorPallete.orange}` }}>
        <LinkToExternalPage
          style={{
            backgroundColor: "transparent",
            textDecoration: "none",
            textAlign: "start",
          }}
          link="google"
        >
          ©Araujo, 2021 - Todos os direitos reservados
        </LinkToExternalPage>
        <LinkToExternalPage
          style={{
            backgroundColor: "transparent",
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: ".3rem",
            textAlign: "start",
          }}
          link="google"
        >
          <AiFillInstagram size={25} color="white" />
          <Text>FelipeInstageram</Text>
        </LinkToExternalPage>
        <LinkToExternalPage
          style={{
            backgroundColor: "transparent",
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: ".3rem",
            textAlign: "start",
          }}
          link="google"
        >
          <BsLinkedin size={30} color="white" />
          <Text>FelipeLinkedin</Text>
        </LinkToExternalPage>
        <Text onClick={handleClick}>Voltar ao início</Text>
      </ThemeProvider>
    </Main>
  );
}
