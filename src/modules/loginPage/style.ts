import styled from "styled-components";
import { collorPallete } from "../../assets/colors/colors";

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;

  input {
    color: white;
    background-color: transparent;
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 60%;
  background-color: black;
  gap: 1rem;
`;

export const Title = styled.h2``;
export const Input = styled.input``;
export const Button = styled.button``;
