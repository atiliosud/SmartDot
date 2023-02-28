import React from "react";
import Field from "./Field";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { Form, SendButton, ErrorText } from "./styles";

type PropsType = {
  callback: any;
  error: string;
};

const RegisterForm = ({ callback, error }: PropsType) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    callback({ email, password, confirmPassword });
  };
  return (
    <Form>
      <Field
        placeholder="Email"
        Icon={() => <EmailOutlinedIcon fontSize="large" />}
        type={"text"}
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />
      <Field
        placeholder="Senha"
        Icon={() => <PasswordOutlinedIcon fontSize="large" />}
        type={"text"}
        password
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />

      <Field
        placeholder="Confirmar Senha"
        Icon={() => <PasswordOutlinedIcon fontSize="large" />}
        type={"text"}
        password
        value={confirmPassword}
        onChange={(e: any) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <ErrorText>{error}</ErrorText>
      <SendButton onClick={onSubmit}>Próximo</SendButton>
    </Form>
  );
};

export default RegisterForm;
