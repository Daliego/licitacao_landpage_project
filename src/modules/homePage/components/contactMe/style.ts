import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/fonts";

export const Main = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  font-family: ${fonts.timesNew};
  /* font: bold; */

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  #contact_01 {
    border-right: 3px solid black;
    gap: 1rem;
    color: black;
    text-align: justify;
    font-size: 1.3rem;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 3px solid black;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  padding: 1rem;
`;

export const ContainerText = styled.div`
  color: #000;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

export const ContainerSmallText = styled.div`
  color: #000;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

export const ContainerCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

export const Form = styled.form``;
