import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  border: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
`;
export const SendButton = styled.button`
  width: 50%;
  height: 40px;
  background-color: #23b5b5;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin: 4% 0;
  &:hover {
    background-color: #1b7d7d;
  }
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
`;
