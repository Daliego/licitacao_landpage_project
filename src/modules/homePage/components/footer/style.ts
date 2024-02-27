import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/fonts";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: start;
  color: white;

  @media (max-width: 768px) {
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
`;
