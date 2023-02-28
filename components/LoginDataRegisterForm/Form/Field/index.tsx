import React, { useState } from "react";
import { Container, Input, Select, Option } from "./styles";

type PropsType = {
  placeholder: string;
  Icon: any;
  type: string;
  password?: boolean;
  value: any;
  onChange: any;
};
const Field = ({
  placeholder,
  Icon,
  type,
  password,
  value,
  onChange,
}: PropsType) => {
  const [countries, setCountries] = useState<any[]>([
    {
      id: "1",
      name: "Brasil",
      code: "BR",
    },
    {
      id: "2",
      name: "Estados Unidos",
      code: "US",
    },
  ]);

  return (
    <Container>
      <Icon />

      {type === "select" ? (
        <Select value={value} onChange={onChange} placeholder={placeholder}>
          {countries.map((country) => (
            <Option>{country.name}</Option>
          ))}
        </Select>
      ) : (
        <Input
          type={password ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default Field;
