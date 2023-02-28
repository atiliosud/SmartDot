import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import { Container, Title } from "./styles";
type propsType = {
  title: string;
  children?: React.FC;
};
const SectionIdentifier = ({ title }: propsType) => {
  return (
    <Container>
      <Title id="register-first-step">{title}</Title>
      <Breadcrumbs />
    </Container>
  );
};

export default SectionIdentifier;
