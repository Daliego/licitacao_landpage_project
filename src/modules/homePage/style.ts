import styled from "styled-components";
import { collorPallete } from "../../assets/colors/colors";
import { fonts } from "../../assets/fonts/fonts";

//Home page styles

export const Container = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-around;
`;

export const Session = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SessionTitle = styled.h1`
  font-family: sans-serif;
  font-size: 1.5rem;
  margin-left: 5rem;
  justify-content: flex-start;
  color: ${collorPallete.yellow};

  @media (max-width: 500px) {
    margin-left: 0;
    text-align: center;
    margin-bottom: 1rem;
  }

`;

export const SeeMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    color: ${collorPallete.yellow};
  }
`;

export const SessionBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  justify-content: center;
`;

export const CardsTable = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-grow: 1; */
  width: 70%;
  gap: 1rem;
  padding: 1rem;
  /* justify-content: space-between; */

  @media (max-width: 1200px) {
    width: 80%;
    font-size: 0.8rem;
  }

  @media (max-width: 1060px) {
    font-size: 0.7rem;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-grow: unset;
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* font-family: Impact; */
  letter-spacing: 0.1rem;
  flex-direction: column;
  gap: 3rem;
`;

export const Center = styled.div`
  /* font-family: sans-serif; */
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  width: 100%;
  padding: 1rem;
  /* gap: 2rem; */

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Presentation = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const BigTitle = styled.h1`
  width: 100%;
  font-size: 3rem;
  justify-content: center;
  text-align: center;
  //talvez white mesmo se pa
  font-family: ${fonts.impact};
  letter-spacing: 0.3rem;
  color: ${collorPallete.yellow};
`;

export const SmallTitle = styled.h1`
  color: #cccccc;
  width: 50%;
  font-family: ${fonts.timesNew};
  font-size: 1.3rem;
  /* justify-items: center; */
  text-align: center;
  flex-direction: column;
  margin-top: 0.6rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 90%;
  }
`;

export const ContactBody = styled.div``;
export const WordColored = styled.span`
  color: ${collorPallete.yellow};
`;
export const Title = styled.h1`
  font-family: ${fonts.timesNew};
  font-size: 2.5rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

export const NavBar = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* gap: 2rem; */
  justify-content: space-around;
  align-self: center;

  @media (max-width: 768px) {
    #divToDisapear {
      display: none;
    }

    display: ${(props) => (props.theme.showMenu ? "flex" : "none")};
    position: absolute;
    top: 10%;
    left: 0;
    height: 15rem;

    backdrop-filter: blur(15px);
    align-items: center;
  }
`;

export const NavItem = styled.div`
  display: flex;
  gap: 3rem;
  /* margin-right: 1rem; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
