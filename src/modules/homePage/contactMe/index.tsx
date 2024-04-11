import { collorPallete } from "../../../assets/colors/colors";
import { sizes } from "../../../assets/staticSizes/size";
import { ButtonToInternalPage } from "../../../shared/components/button";
import { LinkToExternalPage } from "../../../shared/components/linkToExternalPage";
import { ContactForm } from "../form";
import {
  Container,
  ContainerSmallText,
  ContainerText,
  Link,
  Main,
} from "./style";

export function ContactMe() {
  return (
    <Main>
      {/* <Container id="contact_01">
        Fale conosco através do nosso whattsapp ou aguarde entrarmos em contato
        preenchendo o formulário ao lado.
        <LinkToExternalPage
          link="align-self-end"
          style={{
            textAlign: "center",
            textDecoration: "none",
            backgroundColor: `${collorPallete.yellow}`,
            letterSpacing: "normal",
            width: sizes.buttonSize,
          }}
        >
          Clique aqui
        </LinkToExternalPage>
      </Container> */}
      <Container id="contact_02">
        <ContainerText>
          Te convenci? Que tal conversarmos através do{" "}
          <Link target="_blank" href="https://wa.me/5586999374713">
            whatsapp
          </Link>
          ?
        </ContainerText>
        <ContainerSmallText>
          Preencha o formulário que entramos em contato:
        </ContainerSmallText>
        <ContactForm />
      </Container>
    </Main>
  );
}
