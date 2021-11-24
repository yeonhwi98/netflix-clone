import { router } from "../router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { mainWeight, moSize } from "../Style/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  position: ${(props) => props.fixed};
  top: 0;
  left: 0;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  background-color: ${(props) => props.bgColor};
  z-index: 10;
  @media screen and (max-width: 500px) {
    padding: ${moSize.padding};
  }
`;
const Logo = styled.h3`
  color: crimson;
  font-size: 25px;
  font-weight: 600;
  a {
    color: crimson;
  }
`;

const MenuWrap = styled.ul`
  display: flex;
`;
const Menu = styled.li`
  &:nth-child(1) {
    margin-right: 50px;
  }
  font-weight: ${mainWeight.titleWeight};
  @media screen and (max-width: 500px) {
    &:nth-child(1) {
      margin-right: 30px;
    }
  }
`;

export const Header = () => {
  const [bg, setBg] = useState();
  const [fix, setFix] = useState();

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct > 400) {
      setBg("rgba(0,0,0,0.8)");
      setFix("fixed");
    } else {
      setBg("transparent");
      setFix("absolute");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgColor={bg} fixed={fix}>
      <Logo>
        <Link to={router.home}> NETFLIX</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={router.home}>홈</Link>
        </Menu>
        <Menu>
          <Link to={router.search}>탐색하기</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
