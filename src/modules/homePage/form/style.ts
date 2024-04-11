import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  /* #NameWhatsapp {
    background-color: red;
    color: red;
    flex-direction: column;
  }

  @media (max-width: 768px) {
  } */

  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`;

export const InputCheckbox = styled.input`
  justify-self: flex-start;
`;

export const Label = styled.label`
  /* width: 20%; */
  display: flex;
  justify-content: flex-start;
  text-align: start;
  margin-right: 0.5rem;
  color: #000;

  /* @media (min-width: 1200px) {
      width: 20%;
  } */
`;
