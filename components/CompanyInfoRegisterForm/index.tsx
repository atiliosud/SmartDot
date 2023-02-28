import React from "react";
import SmartDotLogo from "../../public/images/logo.png";
import Form from "./Form";
import SectionIdentifier from "./SectionIdentifier";
import * as yup from "yup";

import { Container, Logo, Title } from "./styles";

type PropsType = {
  setStep: any;
  step: number;
  setCompanyInfo: any;
};
const CompanyInfoRegisterForm = ({
  setStep,
  step,
  setCompanyInfo,
}: PropsType) => {
  const [error, setError] = React.useState<string>("");
  let schema = yup.object().shape({
    name: yup.string().required("O campo nome da empresa é obrigátorio!"),
    segment: yup.string().required("O campo de segmento é obrigátorio!"),
    phone: yup.string().required("O campo celular é obrigátorio!"),
  });
  return (
    <Container>
      <Logo src={SmartDotLogo.src} />
      <Title>Sign Up</Title>
      <SectionIdentifier title="Informações da Empresa" />
      <Form
        error={error}
        callback={async (formValue: any) => {
          try {
            await schema.validate(formValue);
            console.log(formValue.phone.includes("_"));
            if (formValue.phone.includes("_")) {
              setError("Digite seu número de celular");
              return;
            }
            setError("");
            setCompanyInfo(formValue);
            setStep(step + 1);
          } catch (error: any) {
            setError(error.message);
          }
        }}
      />
    </Container>
  );
};

export default CompanyInfoRegisterForm;
