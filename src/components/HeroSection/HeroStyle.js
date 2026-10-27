import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 90px 30px 100px;
  @media (max-width: 960px) {
    padding: 70px 16px 80px;
  }
  @media (max-width: 640px) {
    padding: 40px 16px 60px;
  }
  z-index: 1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 135, 0.4), transparent);
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.5;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const SystemLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 360px;
  border-radius: 6px;
  object-fit: cover;
  clip-path: polygon(14% 0%, 86% 0%, 100% 14%, 100% 86%, 86% 100%, 14% 100%, 0% 86%, 0% 14%);
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow:
    0 0 0 4px rgba(0, 255, 135, 0.08),
    0 0 40px rgba(0, 255, 135, 0.2),
    0 0 80px rgba(0, 255, 135, 0.06);
  animation: glow-pulse 3s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 280px;
    max-height: 280px;
  }
  @media (max-width: 640px) {
    max-width: 220px;
    max-height: 220px;
  }
`;

export const Title = styled.div`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 58px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 44px;
  }
  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

export const TextLoop = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 6px;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 12px rgba(0, 255, 135, 0.5);
`;

export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 1.8;
  margin-top: 14px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 500px;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  padding: 12px 28px;
  color: #050B14;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.25);

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 30px rgba(0, 255, 135, 0.5);
  }

  @media (max-width: 640px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const ContactButton = styled.a`
  text-decoration: none;
  padding: 12px 28px;
  color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  background: transparent;
  border: 1px solid rgba(0, 255, 135, 0.35);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 20px rgba(0, 255, 135, 0.2);
  }

  @media (max-width: 640px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;
