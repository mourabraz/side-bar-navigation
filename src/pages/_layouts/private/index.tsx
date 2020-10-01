import React from "react";
import { NavLink } from "react-router-dom";
import { FiShield, FiLayout, FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { useAuth } from "../../../hooks/auth";

import Header from "../components/Header";

import {
  Wrapper,
  ContainerMain,
  SideBarButtonNavigation,
  SideMenu,
  Content,
} from "./styles";

const PrivateLayout: React.FC = ({ children }) => {
  const { isSideMenuOpen, toggleSideMenu } = useAuth();

  return (
    <Wrapper>
      <ContainerMain>
        <SideMenu isOpen={isSideMenuOpen}>
          <SideBarButtonNavigation>
            <button type="button" onClick={(): void => toggleSideMenu()}>
              {isSideMenuOpen ? (
                <FiArrowLeft size={20} color="#666" />
              ) : (
                <FiArrowRight size={20} color="#666" />
              )}
            </button>
          </SideBarButtonNavigation>

          <nav>
            <NavLink to="/privatepage1">
              <FiLayout size={16} color="white" />
              <span>Private Page 1</span>
            </NavLink>
            <NavLink to="/privatepage2">
              <FiShield size={16} color="white" />
              <span>PPage 2</span>
            </NavLink>
          </nav>
        </SideMenu>

        <Content>
          <Header />

          {children}
        </Content>
      </ContainerMain>
    </Wrapper>
  );
};

export default PrivateLayout;
