import styled from "styled-components";
import { collorPallete } from "../../../../assets/colors/colors";

export const Button = styled.button`
  background-color: ${collorPallete.yellow};
  border: none;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  padding: 0.5rem 1rem;

  justify-self: center;
  /* width: 30%; */

  &:hover {
    background-color: ${collorPallete.beige};
    color: #000000;
  }
`;
