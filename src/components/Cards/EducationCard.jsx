import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 640px;
  border-radius: 6px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(0, 255, 135, 0.12);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 0 24px rgba(0, 212, 255, 0.06);
    &::before { opacity: 1; }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 14px 16px;
  }
`

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 14px;
`

const Image = styled.img`
  height: 44px;
  width: 44px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid rgba(0, 212, 255, 0.2);
  flex-shrink: 0;
  @media only screen and (max-width: 768px) { height: 36px; width: 36px; }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`

const Name = styled.div`
  font-family: 'Rajdhani', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  @media only screen and (max-width: 768px) { font-size: 14px; }
`

const GradeBadge = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  padding: 3px 8px;
  border-radius: 3px;
  text-transform: uppercase;
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: ${({ theme }) => theme.secondary};
  background: rgba(0, 212, 255, 0.06);
  white-space: nowrap;
`

const Degree = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.secondary};
  opacity: 0.85;
  letter-spacing: 0.5px;
  @media only screen and (max-width: 768px) { font-size: 11px; }
`

const DateText = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.7;
  letter-spacing: 1px;
`

const Description = styled.div`
  font-size: 13px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
`

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} alt={education.school} />
        <Body>
          <HeaderRow>
            <Name>{education.school}</Name>
            <GradeBadge>GPA: {education.grade}</GradeBadge>
          </HeaderRow>
          <Degree>{education.degree}</Degree>
          <DateText>{education.date}</DateText>
        </Body>
      </Top>
      <Description>{education.desc}</Description>
    </Card>
  )
}

export default EducationCard
