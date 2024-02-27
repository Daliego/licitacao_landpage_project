import styled from "styled-components";
import { collorPallete } from "../../../../assets/colors/colors";
import { fonts } from "../../../../assets/fonts/fonts";

//Card Image styles

export const Main = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-grow: 1; */
  width: 100%;
  height: 100%;
  flex-direction: column;
  /* background-color: white; */
  border: 1px solid ${collorPallete.yellow};
  border-radius: 10px;
  text-align: start;
  padding: 1rem;
  font-family: ${fonts.timesNew};
`;

export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  text-align: justify;
  /* font-size: 100%; */
  /* overflow-wrap: break-word; */
  /* text-size-adjust: calc() ; */
  justify-content: center;
  /* margin-top: 1rem; */
  /* padding: 1rem; */

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  & img {
    min-width: 100%;
    width: 100%;
    height: 90%;
    border-radius: 10px;
    overflow: hidden;
  }
`;
