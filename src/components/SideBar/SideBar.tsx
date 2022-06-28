import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBarContext from "../../context/SideBarContext";
import { colors, devices, fontSizes, margins, paddings, zIndexes } from "../../theme/theme";
import xIcon from "../../assets/icons/icon-x.svg";

const NavBackDrop = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 4rem;
    background: rgba(0, 0, 0, 0.2);
`;

const NavContent = styled.div`
    width: 80%;
    max-width: 18rem;
    height: calc(100vh - 4rem);
    background: ${colors.bg};
    box-shadow: -3px 3px 5px -5px ${colors.shadow};
    z-index: ${zIndexes.sideBar};

    ${devices.mobile} {
        display: none;
    }
`;

const NavItem = styled(Link)`
    display: block;
    width: 100%;
    height: 4rem;
    margin-bottom: ${margins.md};
    padding-left: ${paddings.sm};
    text-decoration: none;
    color: ${colors.darkBlue};
    background: ${colors.lightBlue};
    line-height: 4rem;
    box-sizing: border-box;
`;

const AuthLink = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
    padding-left: ${paddings.sm};
    font-size: ${fontSizes.md};
    color: ${colors.darkBlue};
    line-height: 4rem;
    box-sizing: border-box;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
    height: 2rem;
    margin: ${margins.xs};
    background: url(${xIcon}) center/contain no-repeat;
`;

const SideBar: React.FC = () => {
    const { setIsSideBarOpen } = useContext(SideBarContext);

    return (
        <NavBackDrop>
            <CloseButton onClick={() => setIsSideBarOpen(false)} />
            <NavContent>
                <NavItem to="#">CategoryName</NavItem>
                <NavItem to="#">CategoryName</NavItem>
                <NavItem to="#">CategoryName</NavItem>
                <NavItem to="#">CategoryName</NavItem>
                <NavItem to="#">CategoryName</NavItem>
                <NavItem to="#">CategoryName</NavItem>
                <AuthLink>Login /Register </AuthLink>
            </NavContent>
        </NavBackDrop>

    );
};

export default SideBar;