import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/fonts";
import { collorPallete } from "../../../../assets/colors/colors";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  color: white;

  @media (max-width: 768px) {
    /* text-align: center; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  /* border: 2px 2px 2px 2px solid red; */
  /* justify-items: center; */
  /* border-top: 1px solid white; */
`;

export const Text = styled.p`
  font-family: ${fonts.timesNew};
  font-size: 0.8rem;
  font-weight: bold;
  transition: 0.3s;
  padding: 0.5rem 1rem;
  cursor: pointer;

  /* &:hover {
    color: ${collorPallete.yellow};
  } */
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  font-family: ${fonts.timesNew};
  font-size: 0.8rem;
  font-weight: bold;
  transition: 0.3s;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: white;
  align-items: center;
  
  cursor: pointer;
  &:hover {
    color: ${collorPallete.yellow};
  }

  @media (max-width: 768px) {
    /* text-align: center; */
    justify-content: flex-start;
    /* flex-direction: column; */
  }
`;
