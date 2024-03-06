import { collorPallete } from "../../assets/colors/colors";
import { Footer } from "./../homePage/components/footer/index";
import {
  BigTitle,
  CardsTable,
  Center,
  Div,
  Header,
  Icon,
  Main,
  NavBar,
  NavItem,
  Presentation,
  SeeMoreButton,
  Session,
  SessionBody,
  SessionTitle,
  SmallTitle,
  Title,
  WordColored,
} from "./style";
import { CardWithImage } from "./components/cardWithImage";
import { LinkInPage } from "../../shared/components/linkInPage";
import { ButtonToPosition } from "./components/button";
import { HowAmI } from "./components/howAmI";
import { ContactMe } from "./components/contactMe";
import { useEffect, useState } from "react";
import { CardService } from "../../shared/services/card_service";
import { Card } from "../../shared/models/card";
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { ThemeProvider } from "styled-components";
import { FaqComponent } from "./components/faq";

export function HomePage() {
  const handleClickToPosition = (e, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id)!;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    CardService.getCards().then((response) => {
      setCards(response!);
    });
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Main>
      <Header id="Header">
        <Title>
          Licitação<b style={{ color: collorPallete.yellow, fontFamily: 'sans-serif' }}>arq</b>
        </Title>
        <ThemeProvider theme={{ showMenu }}>
          <NavBar>
            <NavItem>
              <LinkInPage onClick={(e) => handleClickToPosition(e, "aboutMe")}>
                Sobre mim
              </LinkInPage>
              <LinkInPage onClick={(e) => handleClickToPosition(e, "products")}>
                Produto
              </LinkInPage>
              <LinkInPage onClick={(e) => handleClickToPosition(e, "contact")}>
                Contato
              </LinkInPage>
            </NavItem>
          </NavBar>
        </ThemeProvider>
        <Icon onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Icon>
      </Header>

      <Presentation>
        <BigTitle>Arquiteto(a),</BigTitle>

        <Center>
          <SmallTitle>
            Você já pensou em projetar para o maior construtor do Brasil?
          </SmallTitle>
          <SmallTitle>E que tal vender para o maior comprador? </SmallTitle>
          <SmallTitle>
            <WordColored>Licitação</WordColored> é o caminho e eu te ajudo
            fechar este negócio.
          </SmallTitle>
        </Center>
        <Div>
          <ButtonToPosition
            // style={{ fontFamily: `${fonts.timesNew}` }}
            onClinck={(e) => handleClickToPosition(e, "aboutMe")}
            // styles={{}}
          >
            Vamos começar
          </ButtonToPosition>
        </Div>
      </Presentation>

      <Session
        id="aboutMe"
        style={{
          backgroundColor: "white",
          margin: "2rem 0rem 2rem 0rem",
          color: "black",
        }}
      >
        {/* <SessionTitle>Quem eu sou? (provavelmente vai sumir tbm)</SessionTitle> */}
        <SessionBody>
          <HowAmI onClick={(e) => handleClickToPosition(e, "contact")} />
        </SessionBody>
      </Session>

      <Session id="products">
        <SessionTitle>O que eu ofereço?</SessionTitle>
        <SessionBody>
          <CardsTable>
            {cards.map((card) => (
              <>
                <CardWithImage icon={card.image} key={card.id}>
                  {card.description}
                </CardWithImage>
              </>
            ))}
            {/* <CardWithImage icon={product1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
              volutpat.
            </CardWithImage>
            <CardWithImage icon={product2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
              volutpat.
            </CardWithImage>
            <CardWithImage icon={product3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
              volutpat.
            </CardWithImage> */}
          </CardsTable>
        </SessionBody>
        <SessionBody>
          <SeeMoreButton onClick={(e) => handleClickToPosition(e, "faq")}>
            Veja mais
            <AiFillCaretDown />
          </SeeMoreButton>
        </SessionBody>
      </Session>

      <Session id="faq">
        <SessionTitle>Perguntas frequentes</SessionTitle>
        <SessionBody>
          <FaqComponent />
        </SessionBody>
      </Session>

      {/* tem que escolher um backgroud color pra essa sessão */}
      <Session id="contact" style={{ backgroundColor: "#fff" }}>
        {/* <SessionTitle style={{ color: "black" }}>
          Fale Conosco (Contato)
        </SessionTitle> */}
        <SessionBody>
          <ContactMe />
        </SessionBody>
      </Session>

      <Session id="footer" style={{ border: "3px 3px 3px 3px solid red" }}>
        <SessionBody>
          <Footer />
        </SessionBody>
      </Session>
    </Main>
  );
}
