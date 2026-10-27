import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 0 28px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 255, 135, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 1px;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 12px rgba(0, 255, 135, 0.6);
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0 24px;
`;

const Logo = styled.div`
  font-family: 'Rajdhani', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
`;

const LogoSub = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: -12px;
  opacity: 0.6;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 16px;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 8px rgba(0, 255, 135, 0.5);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 4px;
`;

const SocialIcon = styled.a`
  display: inline-flex;
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.25s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    filter: drop-shadow(0 0 6px rgba(0, 255, 135, 0.5));
  }
`;

const Copyright = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.5;
  letter-spacing: 2px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>DINESH.EXE</Logo>
        <LogoSub>// Coding Instructor & Developer</LogoSub>
        <Nav>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#about-section">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialRow>
          <SocialIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="small" />
          </SocialIcon>
          <SocialIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterIcon fontSize="small" />
          </SocialIcon>
          <SocialIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="small" />
          </SocialIcon>
          <SocialIcon href={Bio.insta} target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="small" />
          </SocialIcon>
          <SocialIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon fontSize="small" />
          </SocialIcon>
        </SocialRow>
        <Copyright>&copy; 2026 DINESH PAUDEL — ALL SYSTEMS OPERATIONAL</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
