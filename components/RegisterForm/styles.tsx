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
  font-size: 2.5rem;
  font-weight: 400;
  color: #000;
  font-family: "Montserrat", sans-serif;
`;
