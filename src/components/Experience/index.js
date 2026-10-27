import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 70px 30px 80px;
  @media (max-width: 960px) { padding: 50px 16px 60px; }
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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 16px;
`

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionLabel>// MISSION_LOG.DAT</SectionLabel>
        <Title>Experience</Title>
        <TitleLine />
        <Desc>My professional journey — from classroom teaching to production-grade software development.</Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    style={{
                      borderColor: '#00FF87',
                      boxShadow: '0 0 8px rgba(0, 255, 135, 0.5)',
                    }}
                  />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: 'rgba(0, 255, 135, 0.2)' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default Experience
