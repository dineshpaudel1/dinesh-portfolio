import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 70px 30px;
  @media (max-width: 960px) { padding: 50px 16px; }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 14px;
`

const SectionLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.8;
`

const Title = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  @media (max-width: 768px) { font-size: 32px; }
`

const TitleLine = styled.div`
  width: 50px;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px rgba(0, 255, 135, 0.6);
  margin: 2px 0 4px;
`

const Desc = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  text-align: center;
  max-width: 540px;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 1px;
  @media (max-width: 768px) { font-size: 11px; }
`

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 24px;
  justify-content: center;
`

const SkillPanel = styled.div`
  width: 100%;
  max-width: 480px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(0, 255, 135, 0.12);
  border-radius: 6px;
  padding: 24px 28px;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 12px;
    height: 12px;
    border-top: 2px solid ${({ theme }) => theme.primary};
    border-left: 2px solid ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    border-right: 2px solid ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: rgba(0, 255, 135, 0.3);
    box-shadow: 0 0 24px rgba(0, 255, 135, 0.07);
  }
  &:hover::before { width: 18px; height: 18px; }
  &:hover::after { width: 18px; height: 18px; }

  @media (max-width: 768px) { max-width: 100%; padding: 18px 20px; }
`

const SkillTitle = styled.h3`
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '//';
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    opacity: 0.6;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`

const SkillItem = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid rgba(0, 255, 135, 0.15);
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: rgba(0, 255, 135, 0.5);
    box-shadow: 0 0 10px rgba(0, 255, 135, 0.1);
  }

  @media (max-width: 768px) { font-size: 11px; padding: 6px 10px; }
`

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0.9);
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <SectionLabel>// SKILL_TREE.DAT</SectionLabel>
        <Title>Skills</Title>
        <TitleLine />
        <Desc>Technologies I develop with, and subjects I teach — built through years of hands-on practice and classroom experience.</Desc>
        <SkillsContainer>
          {skills.map((skill, i) => (
            <SkillPanel key={i}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, j) => (
                  <SkillItem key={j}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillPanel>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
