import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiLogOut, FiLogIn } from "react-icons/fi";

import { useAuth } from "../../../../hooks/auth";

import {
  Container,
  Content,
  Profile,
  ProfileImage,
  ProfileName,
} from "./styles";

const Header: React.FC = () => {
  const { user, signOut, signIn } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">Home</Link>
          <NavLink to="/publicpage1">
            <span>Public Page 1</span>
          </NavLink>
          <NavLink to="/publicpage2">
            <span>Public Page 2</span>
          </NavLink>
          {/* {!!user?.name && (
            <>
              <NavLink to="/privatepage1">
                <span>Private Page 1</span>
              </NavLink>
              <NavLink to="/privatepage2">
                <span>Private Page 2</span>
              </NavLink>
            </>
          )} */}
        </nav>

        {!!user?.name ? (
          <Profile>
            <ProfileImage>
              <img
                width="60"
                height="60"
                src={
                  user.photo
                    ? `${user.photo}`
                    : `https://api.adorable.io/avatars/285/${user.email}.png`
                }
                alt={user.name || user.email}
              />
            </ProfileImage>

            <ProfileName>
              <strong>{user.name || user.email}</strong>
              <Link to="/profile">Meu perfil</Link>
            </ProfileName>

            <button type="button" onClick={signOut}>
              <FiLogOut size={20} />
            </button>
          </Profile>
        ) : (
          <Profile>
            <button
              type="button"
              onClick={() => signIn({ email: "", password: "" })}
            >
              <FiLogIn size={20} />
            </button>
          </Profile>
        )}
      </Content>
    </Container>
  );
};

export default Header;
