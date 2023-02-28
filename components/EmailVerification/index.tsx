import React from "react";
import OtpInput from "react18-input-otp";
import * as yup from "yup";
import SmartDotLogo from "../../public/images/logo.png";
import api from "../../services/api";
import SectionIdentifier from "./SectionIdentifier";
import {
  Container,
  Logo,
  Title,
  SendButton,
  SendAgainButton,
  ErrorText,
} from "./styles";
type PropsType = {
  setStep: any;
  step: number;
  setPersonalInfo: any;
  loginInfo: any;
  emailVerificationData: any;
  setEmailVerificationData: any;
};
const EmailVerification = ({
  setStep,
  step,
  setPersonalInfo,
  loginInfo,
  emailVerificationData,
  setEmailVerificationData,
}: PropsType) => {
  const [error, setError] = React.useState<string>("");
  const [code, setCode] = React.useState<string>();
  let schema = yup.object().shape({
    firstName: yup.string().required("O campo nome é obrigátorio!"),
    lastName: yup.string().required("O campo sobrenome é obrigátorio!"),
    countryId: yup
      .number()
      .required("O país é obrigátorio!")
      .min(1, "Selecione um país!"),
  });

  const handleCodeSubmit = async () => {
    try {
      let request = await api.verifyEmailCode({
        code: emailVerificationData.code,
        securityToken: emailVerificationData.securityToken,
      });

      if (request.status === 201) {
        setError("");
        setStep(step + 1);
      }
      console.log(request);
    } catch (error: any) {
      console.log(error);

      if (error.name === "AxiosError") {
        setError("Código Inválido!");
      }
      return error;
    }
  };
  return (
    <Container>
      <Logo src={SmartDotLogo.src} />
      <Title>Verificação de Email</Title>
      <SectionIdentifier
        title={`Enviamos um código de verificação para o e-mail ${loginInfo.email}, digite o código no campo abaixo.`}
      />
      <div style={{ marginBottom: 50 }}>
        <ErrorText id="form-error">{error}</ErrorText>

        <OtpInput
          value={emailVerificationData.code}
          onChange={(val: string) => {
            setEmailVerificationData({ ...emailVerificationData, code: val });
          }}
          numInputs={6}
          separator={<span style={{ marginInline: 5 }}></span>}
          inputStyle={{
            width: 50,
            height: 60,
            border: "none",
            backgroundColor:
              error === "Código Inválido!" ? "#FFCACA" : "#D9D9D9",
            borderRadius: 10,
            fontSize: 20,
          }}
          isInputNum
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <SendButton id="next-step" onClick={handleCodeSubmit}>
          Confirmar
        </SendButton>
        <SendAgainButton id="next-step" onClick={() => {}}>
          Enviar novamente
        </SendAgainButton>
      </div>
    </Container>
  );
};

export default EmailVerification;
