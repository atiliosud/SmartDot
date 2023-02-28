import React from "react";
import Field from "./Field";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import { Form, SendButton, ErrorText } from "./styles";

type PropsType = {
  callback: any;
  error: string;
};

const RegisterForm = ({ callback, error }: PropsType) => {
  const [name, setName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [countryId, setCountryId] = React.useState<number>(0);
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    callback({ firstName: name, lastName, countryId });
  };
  return (
    <Form>
      <Field
        placeholder="Nome"
        Icon={() => <PersonOutlineOutlinedIcon fontSize="large" />}
        type={"text"}
        value={name}
        onChange={(e: any) => {
          setName(e.target.value);
        }}
        id="input-name"
      />
      <Field
        placeholder="Sobrenome"
        Icon={() => <PersonOutlineOutlinedIcon fontSize="large" />}
        type={"text"}
        value={lastName}
        onChange={(e: any) => {
          setLastName(e.target.value);
        }}
        id="input-last-name"
      />

      <Field
        placeholder="Pais"
        Icon={() => <OutlinedFlagIcon fontSize="large" />}
        type={"select"}
        value={countryId}
        onChange={(e: any) => {
          setCountryId(Number(e.target.value));
        }}
        id="country-selector"
      />
      <ErrorText id="form-error">{error}</ErrorText>
      <SendButton id="next-step" onClick={onSubmit}>
        Próximo
      </SendButton>
    </Form>
  );
};

export default RegisterForm;
