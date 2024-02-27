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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  display: inherit;
  color: ${collorPallete.yellow};
  justify-content: flex-start;
`;
export const Table = styled.table`
  background-color: ${collorPallete.homePageBackground};
  color: black;
  border: 3px solid black;
  border-radius: 20px;
  padding: 0.5rem;
  border-spacing: "4px 4px";
`;

export const TableHeader = styled.thead`
  font-weight: bold;
  border-bottom: 2px solid;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
`;

export const TableData = styled.td`
  text-align: center;
  padding: 0.4rem;
`;

export const Button = styled.button`
  background-color: ${collorPallete.yellow};
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${collorPallete.orange};
  }
`;
