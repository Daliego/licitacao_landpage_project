import styled from "styled-components";
import { collorPallete } from "../../../assets/colors/colors";

export const Link = styled.a`
  border: 1px solid ${collorPallete.yellow};
  background-color: orange;
  border: none;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  padding: 0.5rem 1rem;

  justify-self: center;
  align-self: center;
  width: 30%;
  color: inherit;

  &:hover {
    background-color: ${(props) =>
      props.theme.hoverColor ? props.theme.hoverColor : "none"};
    color: #000000;
  }

  @media (max-width: 580px) {
    width: 70%;
  }
`;
