import styled from "styled-components";
import InputMask from "react-input-mask";
export const Container = styled.div`
  border: 1px solid #000000;
  border-radius: 5px;
  width: 70%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
`;
export const Input = styled(InputMask)`
  border: none;
  width: 100%;
  height: 100%;
  margin-left: 5px;
  font-size: 1rem;
  color: #969696;
  font-family: "Montserrat", sans-serif;
`;
export const Select = styled.select`
  border: none;
  width: 100%;
  height: 100%;
  margin-left: 5px;
  font-size: 1rem;
  color: #969696;
  font-family: "Montserrat", sans-serif;
`;
export const Option = styled.option``;
