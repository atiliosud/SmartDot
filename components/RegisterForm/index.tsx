import React from "react";
import SmartDotLogo from "../../public/images/logo.png";
import Form from "./Form";
import SectionIdentifier from "./SectionIdentifier";
import * as yup from "yup";
import { Container, Logo, Title } from "./styles";

type PropsType = {
  setStep: any;
  step: number;
  setPersonalInfo: any;
};
const RegisterForm = ({ setStep, step, setPersonalInfo }: PropsType) => {
  const [error, setError] = React.useState<string>("");
  let schema = yup.object().shape({
    firstName: yup.string().required("O campo nome é obrigátorio!"),
    lastName: yup.string().required("O campo sobrenome é obrigátorio!"),
    countryId: yup
      .number()
      .required("O país é obrigátorio!")
      .min(1, "Selecione um país!"),
  });
  return (
    <Container>
      <Logo src={SmartDotLogo.src} />
      <Title>Sign Up</Title>
      <SectionIdentifier title="Informações Pessoais" />
      <Form
        callback={async (formValue: any) => {
          try {
            await schema.validate(formValue);
            setError("");
            setPersonalInfo(formValue);
            setStep(step + 1);
          } catch (error: any) {
            setError(error.message);
          }
        }}
        error={error}
      />
    </Container>
  );
};

export default RegisterForm;
