import styled from "styled-components";
import BackgroundImage from "../../../public/images/background.png";

export const Container = styled.div`
  background-image: url(${BackgroundImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const TitleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  margin-top: 4%;
`;
