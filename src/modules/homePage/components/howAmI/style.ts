import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 85%;
  /* height: 50%; */
  gap: 0.4rem;
  flex-direction: row;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  object-fit: contain;

  /* & img {
    height: 80%;
  } */

  @media (max-width: 1150px) {
    width: 100%;
    gap: 0.3rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ContainerCell = styled.div`
  justify-content: center;
  align-content: center;
  text-align: justify;
  height: 100%;
  width: 100%;
  padding: 0.6rem;

  @media (max-width: 1150px) {
    width: 100%;
    padding: 0.3rem;
  }

  @media (max-width: 900px) {
    padding: 0;
    margin-bottom: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`;
