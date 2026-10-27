import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  ContactButton,
  SystemLabel,
  HeroButtons,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <SystemLabel>// PROFILE.LOADED &nbsp;●&nbsp; STATUS: ONLINE</SystemLabel>
            <Title>{Bio.name}</Title>
            <TextLoop>
              &gt;&nbsp;
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <HeroButtons>
              <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                View Resume
              </ResumeButton>
              <ContactButton href="#contact">
                Contact Me
              </ContactButton>
            </HeroButtons>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="Dinesh Paudel" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
