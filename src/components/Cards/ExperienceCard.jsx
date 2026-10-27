import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 640px;
  border-radius: 6px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    background: ${({ theme }) => theme.primary};
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(0, 255, 135, 0.3);
    box-shadow: 0 0 24px rgba(0, 255, 135, 0.07);
    &::before { opacity: 1; }
  }

  &:hover ${() => Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
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
  object-fit: contain;
  border-radius: 6px;
  background: rgba(0,255,135,0.05);
  border: 1px solid rgba(0,255,135,0.12);
  padding: 4px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) { height: 36px; width: 36px; }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`

const Role = styled.div`
  font-family: 'Rajdhani', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  @media only screen and (max-width: 768px) { font-size: 14px; }
`

const StatusBadge = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  padding: 3px 8px;
  border-radius: 3px;
  text-transform: uppercase;
  border: 1px solid ${({ active, theme }) =>
    active ? theme.primary : 'rgba(77, 122, 158, 0.4)'};
  color: ${({ active, theme }) =>
    active ? theme.primary : theme.text_secondary};
  background: ${({ active }) =>
    active ? 'rgba(0, 255, 135, 0.08)' : 'transparent'};
  box-shadow: ${({ active }) =>
    active ? '0 0 8px rgba(0, 255, 135, 0.2)' : 'none'};
  white-space: nowrap;
`

const Company = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  opacity: 0.85;
  letter-spacing: 1px;
  @media only screen and (max-width: 768px) { font-size: 11px; }
`

const DateText = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 1px;
  opacity: 0.7;
`

const Description = styled.div`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) { font-size: 12px; }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const SkillsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`

const SkillTag = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid rgba(0, 255, 135, 0.12);
  border-radius: 3px;
  padding: 3px 8px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: rgba(0, 255, 135, 0.4);
  }
`

const isActive = (dateStr) => {
  const lower = (dateStr || '').toLowerCase();
  return lower.includes('present') || lower.includes('now');
};

const ExperienceCard = ({ experience }) => {
  const active = isActive(experience.date);
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt={experience.company} />
        <Body>
          <HeaderRow>
            <Role>{experience.role}</Role>
            <StatusBadge active={active}>
              {active ? '● ACTIVE' : '✓ COMPLETED'}
            </StatusBadge>
          </HeaderRow>
          <Company>{experience.company}</Company>
          <DateText>{experience.date}</DateText>
        </Body>
      </Top>

      {experience?.desc && (
        <Description>
          <Span>{experience.desc}</Span>
        </Description>
      )}

      {experience?.skills && (
        <SkillsRow>
          {experience.skills.map((skill, i) => (
            <SkillTag key={i}>{skill}</SkillTag>
          ))}
        </SkillsRow>
      )}
    </Card>
  )
}

export default ExperienceCard
