import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 70px 30px 80px;
  @media (max-width: 960px) { padding: 50px 16px 60px; }
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
  }
`

const SectionLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 6px;
`

const Heading = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 6px 0;
  @media (max-width: 768px) { font-size: 30px; }
`

const HeadingLine = styled.div`
  width: 50px;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px rgba(0, 255, 135, 0.6);
  margin-bottom: 24px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 960px) { flex: 1; width: 100%; }
`

const Para = styled.p`
  font-size: 15px;
  line-height: 1.85;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 14px;

  span {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    color: ${({ theme }) => theme.primary};
    opacity: 0.9;
  }
`

const StrengthList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StrengthItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;

  &::before {
    content: '▸';
    color: ${({ theme }) => theme.primary};
    font-size: 12px;
    margin-top: 2px;
    flex-shrink: 0;
  }
`

const StatPanel = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(0, 255, 135, 0.15);
  border-radius: 6px;
  padding: 20px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 12px;
    height: 12px;
    border-top: 2px solid ${({ theme }) => theme.primary};
    border-left: 2px solid ${({ theme }) => theme.primary};
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
  }
`

const PanelLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
  grid-column: 1 / -1;
  opacity: 0.7;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const StatValue = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  text-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
`

const StatLabel = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const ContactPanel = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(0, 255, 135, 0.12);
  border-radius: 6px;
  padding: 14px 16px;
  text-decoration: none;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: rgba(0, 255, 135, 0.4);
    box-shadow: 0 0 16px rgba(0, 255, 135, 0.08);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  &:hover::before { opacity: 1; }
`

const ContactIcon = styled.span`
  font-size: 16px;
  flex-shrink: 0;
`

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

const ContactLabel = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const ContactValue = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`

const About = () => {
  return (
    <Container id="about-section">
      <Wrapper>
        <Left>
          <SectionLabel>// CHAR_INFO.EXE</SectionLabel>
          <Heading>About Me</Heading>
          <HeadingLine />
          <Para>
            <span>{'>'} </span>
            I'm Dinesh Paudel — a BCA graduate from Tribhuvan University with over four years of
            experience at the intersection of Computer Science education and full-stack software development.
          </Para>
          <Para>
            Currently working as a Coding Instructor at the Mahangar Coding Program and as a
            Computer Science Teacher & IT Administrator at Samata School, Lalitpur. I teach
            students from Grade 8–12 — guiding them through Scratch, HTML, CSS, Python, and
            AI concepts using hands-on, project-based methods.
          </Para>
          <Para>
            On the development side, I've built and deployed real-world web and mobile
            applications — including a full-stack marketplace platform and a React Native app
            now live on Google Play. I build what I teach. I teach what I build.
          </Para>
          <StrengthList>
            <StrengthItem>Clear communicator — explains complex concepts in simple language</StrengthItem>
            <StrengthItem>Practical approach — project-based learning connecting theory to real world</StrengthItem>
            <StrengthItem>Technically grounded — active developer with production-grade experience</StrengthItem>
            <StrengthItem>Adaptable — adjusts to different learning levels and environments</StrengthItem>
          </StrengthList>
        </Left>

        <Right>
          <StatPanel>
            <PanelLabel>// CHAR_STATS</PanelLabel>
            <Stat>
              <StatValue>4+</StatValue>
              <StatLabel>Years Teaching</StatLabel>
            </Stat>
            <Stat>
              <StatValue>3+</StatValue>
              <StatLabel>Live Projects</StatLabel>
            </Stat>
            <Stat>
              <StatValue>2</StatValue>
              <StatLabel>Active Roles</StatLabel>
            </Stat>
            <Stat>
              <StatValue>BCA</StatValue>
              <StatLabel>TU — Completed</StatLabel>
            </Stat>
          </StatPanel>

          <ContactPanel href={`mailto:${Bio.email}`}>
            <ContactIcon>✉</ContactIcon>
            <ContactText>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>{Bio.email}</ContactValue>
            </ContactText>
          </ContactPanel>

          <ContactPanel href={`tel:${Bio.phone}`}>
            <ContactIcon>☎</ContactIcon>
            <ContactText>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>{Bio.phone}</ContactValue>
            </ContactText>
          </ContactPanel>

          <ContactPanel href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <ContactIcon>⬡</ContactIcon>
            <ContactText>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue>dinesh-paudel</ContactValue>
            </ContactText>
          </ContactPanel>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default About
