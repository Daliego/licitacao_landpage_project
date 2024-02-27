import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: ${(props) => props.style?.width || "100%"};
  flex: ${(props) => props.style?.flex || "default"};
  flex-direction: column;
  align-items: flex-start;
`;

export const InputComponent = styled.input`
  display: flex;
  border: 1px solid #ccc;

  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border-color: "#ccc";
  font-size: 1rem;
  padding: 1rem;
`;

export const InputErrorMessage = styled.p`
  color: red;
  margin: 5px 5px;
  font-size: 0.8rem;
`;
