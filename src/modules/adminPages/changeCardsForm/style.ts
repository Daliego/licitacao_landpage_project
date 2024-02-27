import styled from "styled-components";
import { collorPallete } from "../../../assets/colors/colors";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
export const Body = styled.div`
  width: 80%;
  display: inherit;
  flex-direction: column;
  gap: 2rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  gap: .5rem;
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 1rem; */
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${collorPallete.homePageBackground};
  padding: 1rem;
`;

export const Title = styled.h2`
  display: inherit;
  color: ${collorPallete.yellow};
  justify-content: flex-start;
`;

export const Select = styled.select`
  width: 60%;
  align-self: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-sizing: border-box;

  outline: none;
  border-color: "#ccc";
  font-size: 1rem;
  padding: 1rem;
`;
export const Option = styled.option``;
export const Img = styled.img`
  padding: .4rem;
  align-self: center;
  width: 80%;
  height: 30%;
  object-fit: contain;
  

`;
