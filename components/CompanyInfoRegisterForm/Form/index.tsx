import React from "react";
import Field from "./Field";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Form, SendButton, ErrorText } from "./styles";
import MaskedField from "./MaskedField";

type PropsType = {
  callback: any;
  error: string;
};

const RegisterForm = ({ callback, error }: PropsType) => {
  const [name, setName] = React.useState<string>("");
  const [segment, setSegment] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    callback({ name, segment, phone });
  };
  return (
    <Form>
      <Field
        placeholder="Nome da empresa"
        Icon={() => <PersonOutlineOutlinedIcon fontSize="large" />}
        type={"text"}
        value={name}
        onChange={(e: any) => {
          setName(e.target.value);
        }}
        id="input-company-name"
      />
      <Field
        placeholder="Segmento da empresa"
        Icon={() => <BusinessOutlinedIcon fontSize="large" />}
        type={"select"}
        value={segment}
        onChange={(e: any) => {
          setSegment(e.target.value);
        }}
        id="input-company-segment"
      />

      <MaskedField
        mask="(99) 99999-9999"
        placeholder="Celular"
        Icon={() => <LocalPhoneOutlinedIcon fontSize="large" />}
        type={"text"}
        value={phone}
        onChange={(e: any) => {
          setPhone(e.target.value);
        }}
        id="input-company-phone"
      />
      <ErrorText id="form-error">{error}</ErrorText>
      <SendButton id="next-step" onClick={onSubmit}>
        Próximo
      </SendButton>
    </Form>
  );
};

export default RegisterForm;
