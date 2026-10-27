import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 70px 30px 80px;
  @media (max-width: 960px) { padding: 50px 16px 60px; }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 14px;
  @media (max-width: 960px) { flex-direction: column; }
`;

export const Title = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  @media (max-width: 768px) { font-size: 32px; }
`;

export const Desc = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  text-align: center;
  max-width: 540px;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 1px;
  @media (max-width: 768px) { font-size: 11px; }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1px solid rgba(0, 255, 135, 0.25);
  color: ${({ theme }) => theme.primary};
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  letter-spacing: 1.5px;
  border-radius: 4px;
  margin: 16px 0;
  overflow: hidden;
`;

export const ToggleButton = styled.div`
  padding: 8px 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;
  ${({ active, theme }) =>
    active
      ? `background: rgba(0, 255, 135, 0.1); color: ${theme.primary};`
      : `color: ${theme.text_secondary};`}
  &:hover {
    background: rgba(0, 255, 135, 0.07);
    color: ${({ theme }) => theme.primary};
  }
`;

export const Divider = styled.div`
  width: 1px;
  background: rgba(0, 255, 135, 0.25);
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 14px;
`;
