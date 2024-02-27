import styled from "styled-components";
import { collorPallete } from "../../../../assets/colors/colors";

export const Main = styled.div`
  color: white;
`;
export const NavBar = styled.div`
  width: 100%;
  height: 10%;
  align-items: center;
  padding: 1rem;
  display: flex;
  border-bottom: 2px solid ${collorPallete.yellow};
  /* justify-content: space-around; */
`;

export const NavbarItens = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;
export const Logo = styled.div`
  /* width: 20%; */
  font-family: serif;
  font-size: 2.5rem;
  margin-left: 0.5rem;
  text-align: center;
  /* margin-left: 0.5rem; */
  /* justify-content: flex-start; */
`;
