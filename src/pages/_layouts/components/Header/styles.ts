import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 72px;

  border-bottom: 1px solid #e7eaec;
`;

export const Content = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  nav {
    display: flex;
    align-items: center;
    a {
      font-weight: bold;
      color: #666;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      & + a {
        padding-left: 20px;
      }
      img {
        height: 64px;
      }
      &.active {
        span {
          border-bottom: 1px solid #222;
        }
      }
    }
  }
`;

export const Profile = styled.aside`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ccc;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 40px;
    height: 40px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const ProfileImage = styled.div`
  margin-right: 10px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 2px solid #fff;
  }
`;

export const ProfileName = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin-right: 10px;
  strong {
    display: block;
    color: #222;
  }
  a {
    display: block;
    margin-top: 2px;
    font-size: 1.2rem;
    color: #222;
  }
`;
