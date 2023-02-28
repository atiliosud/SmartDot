import React, { useEffect, useState } from "react";

import { Container, Divider, ActiveDivider, ActiveDot, Dot } from "./styles";

type propsType = {};
const Breadcrumbs = ({}: propsType) => {
  return (
    <Container>
      <ActiveDot>1</ActiveDot>
      <ActiveDivider />
      <ActiveDot>2</ActiveDot>
      <ActiveDivider />
      <ActiveDot>3</ActiveDot>
    </Container>
  );
};

export default Breadcrumbs;
