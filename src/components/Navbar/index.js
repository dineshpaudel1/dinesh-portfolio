import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import styled from "styled-components";

const StatusDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 6px ${({ theme }) => theme.primary};
  animation: dot-blink 2s ease-in-out infinite;
  margin-right: 4px;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const LogoBracket = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.secondary};
  letter-spacing: 1px;
  opacity: 0.7;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <StatusDot />
          <LogoText>
            <LogoBracket>// PORTFOLIO</LogoBracket>
            <Span>DINESH.EXE</Span>
          </LogoText>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#about-section">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            [ GitHub ]
          </GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>Home</MobileLink>
            <MobileLink href="#about-section" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
            <GitHubButton
              href={Bio.github}
              target="_blank"
              style={{ width: "max-content" }}
            >
              [ GitHub Profile ]
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
