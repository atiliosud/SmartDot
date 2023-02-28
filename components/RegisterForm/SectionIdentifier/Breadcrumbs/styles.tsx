import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  font-family: "Montserrat", sans-serif;
`;

export const Dot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  color: #fff;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
export const ActiveDot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23b5b5;
  color: #fff;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
export const Divider = styled.div`
  width: 40px;
  height: 10px;
  background-color: #d9d9d9;
`;
export const ActiveDivider = styled.div`
  width: 40px;
  height: 10px;
  background-color: #23b5b5;
`;
