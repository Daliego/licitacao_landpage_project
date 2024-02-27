import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 80%;
  gap: .5rem;
  flex-direction: row;
  font-family: 'Times New Roman', Times, serif; 
  font-size: 1.4rem;

  @media (max-width: 900px) {
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
