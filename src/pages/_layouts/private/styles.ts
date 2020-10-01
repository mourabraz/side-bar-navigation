import styled from "styled-components";

interface ISideMenuProps {
  isOpen: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerMain = styled.div`
  display: flex;
  min-height: calc(100vh - 72px);
`;

export const SideMenu = styled.aside<ISideMenuProps>`
  width: ${(props) => (props.isOpen ? "220px" : "72px")};
  min-height: 100vh;
  background-color: #2f4050;
  border-color: #2f4050;

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    flex-wrap: wrap;

    a {
      display: flex;
      justify-content: start;
      align-items: center;
      background: transparent;
      width: 100%;
      height: 50px;
      padding: 14px 20px 14px 25px;
      color: #a7b1c2;
      font-weight: bold;

      svg {
        margin-right: 8px;
        stroke: #a7b1c2;
      }

      &:hover {
        color: #fff;
        background-color: #293846;

        svg {
          stroke: #fff;
        }
      }

      &.active {
        border-left: 4px solid #19aa8d;
        color: #fff;
        background-color: #293846;

        svg {
          stroke: #fff;
        }
      }

      span {
        display: ${(props) => (props.isOpen ? "inline-block" : "none")};
      }
    }
  }
`;

export const SideBarButtonNavigation = styled.div`
  /* background: linear-gradient(
    323deg,
    rgba(46, 63, 79, 1) 25%,
    rgba(47, 64, 80, 1) 75%,
    rgba(167, 177, 194, 1) 75%
  ); */
  /* background: linear-gradient(
    323deg,
    rgba(47, 64, 80, 1) 29%,
    rgba(46, 63, 79, 1) 42%,
    rgba(112, 125, 142, 1) 84%,
    rgba(167, 177, 194, 1) 100%
  ); */
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;

    border: none;
    background-color: transparent;

    &:hover {
      svg {
        stroke: #fff;
      }
    }
  }
`;

export const Content = styled.main`
  /* Take the remaining width */
  flex: 1;
  padding: 0;

  /* Make it scrollable */
  overflow: auto;
`;
