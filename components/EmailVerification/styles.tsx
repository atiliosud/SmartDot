import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.background};
  width: 65%;
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 45%;
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #000;
  font-family: "Montserrat", sans-serif;
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
export const SendAgainButton = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #23b5b5;
  background-color: #fff;
  cursor: pointer;
  margin: 0 0 4% 0;
  &:hover {
    background-color: #d8d8d8;
  }
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10px;
`;
