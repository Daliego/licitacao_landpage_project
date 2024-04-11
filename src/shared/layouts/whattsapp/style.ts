import styled from "styled-components";

export const FloatIcon = styled.img`
  position: fixed;
  padding: 2px;
  width: 50px;
  height: 50px;
  bottom: 60px;
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

  @media (max-width: 720px) {
      bottom: 20px;
      right: 20px;
  }
  
`;
