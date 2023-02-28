import React from "react";
import SmartDotLogo from "../../public/images/logo.png";
import Form from "./Form";
import SectionIdentifier from "./SectionIdentifier";
import * as yup from "yup";

import { Container, Logo, Title } from "./styles";
import api from "../../services/api";

type PropsType = {
  setStep: any;
  step: number;
  setLoginInfo: any;
  personalInfo: any;
  companyInfo: any;
  loginInfo: any;
  setSecurityToken: any;
};
const LoginDataRegisterForm = ({
  setStep,
  step,
  setLoginInfo,
  personalInfo,
  companyInfo,
  setSecurityToken,
}: PropsType) => {
  const [error, setError] = React.useState<string>("");
  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email invalido!")
      .required("O campo email é obrigátorio!"),
    password: yup
      .string()
      .required("O campo de senha é obrigátorio!")
      .min(8, " A senha deve conter no minimo 8 caractéres"),
    confirmPassword: yup
      .string()
      .test("passwords-match", "A senhas não coincidem", function (value) {
        return this.parent.password === value;
      }),
  });
  return (
    <Container>
      <Logo src={SmartDotLogo.src} />
      <Title>Sign Up</Title>
      <SectionIdentifier title="Dados de Login" />
      <Form
        error={error}
        callback={async (formValue: any) => {
          try {
            await schema.validate(formValue);
            setError("");
            setLoginInfo(formValue);
            const payload = {
              companyInfo,
              loginData: formValue,
              personalInfo,
            };
            let request = await api.signup(payload);
            if (request.status === 201) {
              console.log(request);
              setSecurityToken(request.data.securityToken);
              setStep(step + 1);
            }
          } catch (error: any) {
            if (error.name === "AxiosError") {
              setError(error.response.data.error);
              return;
            }
            setError(error.message);
          }
        }}
      />
    </Container>
  );
};

export default LoginDataRegisterForm;
