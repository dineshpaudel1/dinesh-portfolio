import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const SectionLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.8;
`

const TitleLine = styled.div`
  width: 50px;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px rgba(0, 255, 135, 0.6);
  margin: 2px 0 4px;
`

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <SectionLabel>// DEPLOYED_BUILDS.LOG</SectionLabel>
        <Title>Projects</Title>
        <TitleLine />
        <Desc>A selection of real-world web and mobile applications I've built — from full-stack platforms to production mobile apps.</Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {toggle !== 'all' && projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
