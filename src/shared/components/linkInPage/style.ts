import styled from "styled-components";
import { collorPallete } from "../../../assets/colors/colors";

export const Text = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  /* text-align: center; */
  /* justify-content: center; */
  /* align-items: center; */
  /* align-content: center; */
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${collorPallete.beige};
  }
`;
