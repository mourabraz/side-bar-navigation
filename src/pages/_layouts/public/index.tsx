import React from "react";

import Header from "../components/Header";

import { Wrapper } from "./styles";

const PublicLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />

    {children}
  </Wrapper>
);

export default PublicLayout;
