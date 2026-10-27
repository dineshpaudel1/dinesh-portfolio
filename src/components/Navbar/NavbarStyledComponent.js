import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: rgba(5, 11, 20, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 255, 135, 0.15);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 28px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  padding: 0 6px;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  font-family: 'Rajdhani', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    text-shadow: 0 0 8px rgba(0, 255, 135, 0.6);
  }
`;

export const GitHubButton = styled.a`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 4px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 18px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #050B14;
    box-shadow: 0 0 16px rgba(0, 255, 135, 0.4);
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 70px;
  right: 0;
  width: 100%;
  padding: 20px 32px 28px;
  background: rgba(5, 11, 20, 0.97);
  border-bottom: 1px solid rgba(0, 255, 135, 0.15);
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '999' : '-1')};
`;

export const MobileLink = styled.a`
  font-family: 'Share Tech Mono', monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 8px rgba(0, 255, 135, 0.6);
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover { color: ${({ theme }) => theme.primary}; }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 4px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #050B14;
  }
`;
