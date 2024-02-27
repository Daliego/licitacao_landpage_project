import styled from "styled-components";
import { collorPallete } from "../../../../assets/colors/colors";

//Card styles

export const Container = styled.div`
  padding: .5rem;
  display: flex;
  align-content: center;
  text-align: center;
  justify-content: center;
  border: 4px solid ${collorPallete.yellow};
  border-radius: 25px;
   
   & img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
   }
`;
