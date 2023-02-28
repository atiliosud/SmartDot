import React, { useState } from "react";

import { Container, Input, Select, Option } from "./styles";

type PropsType = {
  placeholder: string;
  Icon: any;
  type: string;
  password?: boolean;
  value: any;
  onChange: any;
  id: string;
};
const Field = ({
  placeholder,
  Icon,
  type,
  password,
  value,
  onChange,
  id,
}: PropsType) => {
  const [segments, setSegments] = useState<any[]>([
    {
      name: "Tecnologia",
    },
    {
      name: "Advocacia",
    },
  ]);
  return (
    <Container>
      <Icon />

      {type === "select" ? (
        <Select
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        >
          {segments.map((segment) => (
            <Option>{segment.name}</Option>
          ))}
        </Select>
      ) : (
        <Input
          type={password ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
        />
      )}
    </Container>
  );
};

export default Field;
