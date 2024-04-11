import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 70%;
  gap: .5rem;
  flex-direction: row;
  font-family: 'Times New Roman', Times, serif; 
  font-size: 1.4rem;
  border: 1px solid white;
  border-radius: 25px;

  @media (max-width: 1200px) {
      width: 80%;
  }

  @media (max-width: 1060px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
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
  padding: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`;
