import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 320px;
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid rgba(0, 255, 135, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 12px;
    height: 12px;
    border-top: 2px solid rgba(0, 255, 135, 0.6);
    border-left: 2px solid rgba(0, 255, 135, 0.6);
    z-index: 2;
    transition: all 0.3s ease;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid rgba(0, 255, 135, 0.6);
    border-right: 2px solid rgba(0, 255, 135, 0.6);
    z-index: 2;
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: rgba(0, 255, 135, 0.35);
    box-shadow: 0 0 30px rgba(0, 255, 135, 0.08);
    transform: translateY(-6px);
    &::before, &::after { width: 18px; height: 18px; }
  }

  @media (max-width: 500px) { width: 100%; }
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
  filter: brightness(0.85) saturate(0.9);

  ${Card}:hover & {
    transform: scale(1.04);
    filter: brightness(1) saturate(1);
  }
`

const LiveBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.primary};
  background: rgba(0, 255, 135, 0.1);
  border: 1px solid rgba(0, 255, 135, 0.4);
  border-radius: 3px;
  padding: 3px 8px;
  backdrop-filter: blur(4px);
`

const Body = styled.div`
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`

const Tag = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.primary};
  background: rgba(0, 255, 135, 0.07);
  border: 1px solid rgba(0, 255, 135, 0.2);
  padding: 3px 8px;
  border-radius: 3px;
`

const Title = styled.div`
  font-family: 'Rajdhani', sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
        <LiveBadge>● LIVE</LiveBadge>
      </ImageWrapper>
      <Body>
        <Tags>
          {project.tags?.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{project.title}</Title>
        <DateText>{project.date}</DateText>
        <Description>{project.description}</Description>
      </Body>
    </Card>
  )
}

export default ProjectCards
