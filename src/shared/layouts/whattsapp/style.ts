import styled from "styled-components";

export const FloatIcon = styled.img`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border: solid transparent;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 1000;
  cursor: pointer;

  :hover {
    background-color: blue;
  }
`;
