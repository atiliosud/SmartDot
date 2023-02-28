import React, { useState, useEffect } from "react";
import api from "../../../../services/api";

import { Container, Input, Select, Option } from "./styles";

type PropsType = {
  placeholder: string;
  Icon: any;
  type: string;
  options?: any[];
  value: any;
  onChange: any;
  id: string;
};
type countryType = {
  id: number;
  name: string;
  code: string;
};
const Field = ({ placeholder, Icon, type, onChange, value, id }: PropsType) => {
  const [countries, setCountries] = useState<countryType[]>([]);

  useEffect(() => {
    (async () => {
      if (type === "select") {
        let countriesRes = await api.getCountries();
        setCountries(countriesRes.data.countries);
      }
    })();
  }, []);
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
          {countries.map((country) => (
            <Option value={country.id}>{country.name}</Option>
          ))}
        </Select>
      ) : (
        <Input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </Container>
  );
};

export default Field;
