import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import {PhoneIphone} from 'styled-icons/material/PhoneIphone'
const Wrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  color: gray;
  padding-bottom: 10px;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectCard = styled.div`
  margin-bottom: 40px;
  padding-left: 10%;
  flex: 1 0;
`;

const ProjectName = styled.div`
  position: relative;
  top: 10px;
  font-family: "Times New Roman";
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.div`
  padding-right: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const IconsWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: auto;
`;

const ProjectMyJob = styled.div`
  padding-right: 10%;
`;

const ProjectTechs = styled.ul`
  padding-right: 10%;
`;

const TechPoint = styled.li`
  float: left;
  list-style-position: inside;
  list-style-type: disc;
  margin-right: 1em;
`;

const Demo = styled.a`
`;

const Caption = styled.b`
  display: block;
  padding-top: 4px;
`;

const Title = styled.h3`
  color: black;
  padding-left: 5%;
`;

const Delim = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  border: solid 0.5px lightgray;
  width: 90%;
  box-shadow: 0.2px 0.2px #888888;
`;

// <Wrapper>
      //   <Title>Personal Project</Title>
      //   <Project>
      //     <ProjectCard>
      //       Software 3D Renderer
      //     </ProjectCard>
      //     <ProjectCard>
      //       Js2Cpp Transpiler
      //     </ProjectCard>
      //     <ProjectCard>
      //       Coroutine Library
      //     </ProjectCard>
      //     <ProjectCard>
      //       Personal WebSite
      //     </ProjectCard>
      //   </Project>
      // </Wrapper>
      // <Wrapper>
      //   <Title>Course Paper</Title>
      //   <Project>
      //     <ProjectCard>
      //       Question Answering System
      //     </ProjectCard>
      //   </Project>
      // </Wrapper>

class Projects extends React.Component {

  render() {
    return (
      <div>
      <Wrapper>
        <Title>Project</Title>
        <Project>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://itunes.apple.com/us/app/tela-health/id1395480873?ls=1&mt=8"><IconsWrapper><PhoneIphone color="rgb(35,208,196)"/></IconsWrapper></Demo>Tela App -- healthcare moble app</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Rationale:</Caption>
            Too little time and resources are spent understanding the patient experience in the real world. We are changing that. Our mission is to unlock insights into the patient experience in order to improve patient quality of life and survival, enhance the way providers engage with their patients, and advance cancer research. The Tela app is a free tool for any patient to use to to track their progress during treatment. Patients own their self-generated health data and can send a PDF report to providers.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What I learnt:</Caption>
            Tx Tracker is a startup using WeWork as their office. Its developer team was quite small at that time. Five people in total including me as their Summer intern in 2018. We all worked remotely and communicated via Skype which is quite challenging for me. I learnt not only how to build app from scratch, but the ways to play an efficient role in a small developer team as well. Communication and quick prototyping makes app developing agile. After three months of hard working, the first version of Tela App was released on iOS app store. It is a nice app for patients to track their symptoms which in turn gives valuable data to their doctors.<br/>
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>React Native</TechPoint>
              <TechPoint>Elixir OTP Phoenix</TechPoint>
              <TechPoint>Restful/GraphQL</TechPoint>
              <TechPoint>PostgresQL</TechPoint>
              <TechPoint>Google App Engine</TechPoint>
            </ProjectTechs>
          </ProjectCard>
        </Project>
      </Wrapper>
      <Wrapper>
        <Title>Personal Project</Title>
        <Project>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://itunes.apple.com/us/app/tela-health/id1395480873?ls=1&mt=8"><IconsWrapper><PhoneIphone color="rgb(35,208,196)"/></IconsWrapper></Demo>Tela App -- healthcare moble app</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Rationale:</Caption>
            Too little time and resources are spent understanding the patient experience in the real world. We are changing that. Our mission is to unlock insights into the patient experience in order to improve patient quality of life and survival, enhance the way providers engage with their patients, and advance cancer research. The Tela app is a free tool for any patient to use to to track their progress during treatment. Patients own their self-generated health data and can send a PDF report to providers.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What I learnt:</Caption>
            Tx Tracker is a startup using WeWork as their office. Its developer team was quite small at that time. Five people in total including me as their Summer intern in 2018. We all worked remotely and communicated via Skype which is quite challenging for me. I learnt not only how to build app from scratch, but the ways to play an efficient role in a small developer team as well. Communication and quick prototyping makes app developing agile. After three months of hard working, the first version of Tela App was released on iOS app store. It is a nice app for patients to track their symptoms which in turn gives valuable data to their doctors.<br/>
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>React Native</TechPoint>
              <TechPoint>Elixir OTP Phoenix</TechPoint>
              <TechPoint>Restful/GraphQL</TechPoint>
              <TechPoint>PostgresQL</TechPoint>
              <TechPoint>Google App Engine</TechPoint>
            </ProjectTechs>
          </ProjectCard>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://itunes.apple.com/us/app/tela-health/id1395480873?ls=1&mt=8"><IconsWrapper><PhoneIphone color="rgb(35,208,196)"/></IconsWrapper></Demo>Tela App -- healthcare moble app</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Rationale:</Caption>
            Too little time and resources are spent understanding the patient experience in the real world. We are changing that. Our mission is to unlock insights into the patient experience in order to improve patient quality of life and survival, enhance the way providers engage with their patients, and advance cancer research. The Tela app is a free tool for any patient to use to to track their progress during treatment. Patients own their self-generated health data and can send a PDF report to providers.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What I learnt:</Caption>
            Tx Tracker is a startup using WeWork as their office. Its developer team was quite small at that time. Five people in total including me as their Summer intern in 2018. We all worked remotely and communicated via Skype which is quite challenging for me. I learnt not only how to build app from scratch, but the ways to play an efficient role in a small developer team as well. Communication and quick prototyping makes app developing agile. After three months of hard working, the first version of Tela App was released on iOS app store. It is a nice app for patients to track their symptoms which in turn gives valuable data to their doctors.<br/>
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>React Native</TechPoint>
              <TechPoint>Elixir OTP Phoenix</TechPoint>
              <TechPoint>Restful/GraphQL</TechPoint>
              <TechPoint>PostgresQL</TechPoint>
              <TechPoint>Google App Engine</TechPoint>
            </ProjectTechs>
          </ProjectCard>
        </Project>
      </Wrapper>
      </div>
    );
  }
}

export default Projects;
