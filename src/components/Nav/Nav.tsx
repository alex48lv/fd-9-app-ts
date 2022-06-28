import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  colors,
  devices,
  fontSizes,
  margins,
  paddings,
  zIndexes,
} from "../../theme/theme";
import logoImage from "../../assets/logo-128.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import searchIcon from "../../assets/icons/icon-search.svg";
import userIcon from "../../assets/icons/icon-person.svg";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";
import bagIcon from "../../assets/icons/icon-bag-empty.svg";
import SideBarContext from "../../context/SideBarContext";

const StyledNav = styled.header`
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 0;
  padding: ${paddings.sm};
  box-sizing: border-box;
  background: ${colors.bg};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};
`;

const BurgerBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin-right: ${margins.sm};
  float: left;
  background: url(${menuIcon}) center no-repeat;

  ${devices.tablet} {
    display: none;
  }
`;

const NavActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  height: 100%;
`;

const StyledLink = styled(Link) <{ icon: string }>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-left: ${margins.sm};
  background: url(${(props) => props && props.icon}) center/contain no-repeat;
`;

const SearchFieldWrapper = styled.div`
  position: relative;
  min-width: 2rem;
  min-height: 2rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0.25rem;
    right: 1px;
    width: 2rem;
    height: 1.5rem;
    background: url(${searchIcon}) ${colors.bg} center/contain no-repeat;
    z-index: ${zIndexes.sideBar}
  }
`;

const SearchField = styled.input`
  display: none;
  position: relative;
  height: 2rem;
  border: 1px solid ${colors.darkBlue};
  box-sizing: border-box;

  ${devices.tablet} {
    display: inline-block;
  }
`;

const CategoryMenu = styled.div`
  position: absolute;
  top: 4rem;
  display: none;
  justify-content: center;
  width: 100%;
  height: 2rem;
  background: ${colors.lightBlue};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};

  ${devices.tablet} {
    display: flex;
  }
`;

const CategoryLink = styled(Link)`
  width: 8rem;
  height: 100%;
  font-size: ${fontSizes.xs};
  color: ${colors.darkBlue};
  border-right: 1px solid ${colors.bg};
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  line-height: 2rem;

  &:nth-child(1) {
    border-left: 1px solid ${colors.bg};
  }

  &:hover {
    opacity: .6;
  }
`;

const Nav: React.FC = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);

  return (
    <>
      <StyledNav>
        <BurgerBtn onClick={(): void => setIsSideBarOpen(!isSideBarOpen)} />
        <StyledLink to="/" icon={logoImage} />
        <NavActionWrapper>
          <SearchFieldWrapper>
            <SearchField type="text" />
          </SearchFieldWrapper>
          <StyledLink as="div" onClick={(): void => {}} icon={userIcon} />
          <StyledLink to="/wishlist" icon={heartIcon} />
          <StyledLink to="/cart" icon={bagIcon} />
        </NavActionWrapper>
      </StyledNav>
      <CategoryMenu>
        <CategoryLink to="/">category name</CategoryLink>
        <CategoryLink to="/">category name</CategoryLink>
        <CategoryLink to="/">category name</CategoryLink>
        <CategoryLink to="/">category name</CategoryLink>
        <CategoryLink to="/">category name</CategoryLink>
      </CategoryMenu>
    </>
  );
};

export default Nav;
