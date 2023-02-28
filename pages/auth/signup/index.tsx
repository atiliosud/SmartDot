import React, { useEffect, useState } from "react";
import RegisterForm from "../../../components/RegisterForm/";
import CompanyInfoRegisterForm from "../../../components/CompanyInfoRegisterForm/";
import EmailVerification from "../../../components/EmailVerification/";
import {
  Container,
  Description,
  FormSection,
  Title,
  TitleSection,
} from "./styles";
import LoginDataRegisterForm from "../../../components/LoginDataRegisterForm";
import API from "../../../services/api";

export default function PersonalInfo() {
  const [step, setStep] = useState<any>(1);
  const [personalInfo, setPersonalInfo] = useState({
    countryId: 0,
    firstName: "",
    lastName: "",
  });
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    segment: "",
    phone: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailVerificationData, setEmailVerificationData] = useState({
    code: null,
    securityToken: "",
  });
  const handleActiveForm = () => {
    switch (step) {
      case 1:
        return (
          <RegisterForm
            setPersonalInfo={setPersonalInfo}
            step={step}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <CompanyInfoRegisterForm
            setCompanyInfo={setCompanyInfo}
            step={step}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <LoginDataRegisterForm
            setLoginInfo={setLoginInfo}
            step={step}
            setStep={setStep}
            personalInfo={personalInfo}
            companyInfo={companyInfo}
            loginInfo={loginInfo}
            setSecurityToken={(token: string) =>
              setEmailVerificationData({
                ...emailVerificationData,
                securityToken: token,
              })
            }
          />
        );
      case 4:
        return (
          <EmailVerification
            step={step}
            setStep={setStep}
            loginInfo={loginInfo}
            setPersonalInfo={setPersonalInfo}
            emailVerificationData={emailVerificationData}
            setEmailVerificationData={setEmailVerificationData}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Container>
      <TitleSection>
        <Title>SMART DOT</Title>
        <Description>
          Tenha o controle total de um jeito pratico e rápido na palma de suas
          mãos.
        </Description>
      </TitleSection>
      <FormSection>{handleActiveForm()}</FormSection>
    </Container>
  );
}
