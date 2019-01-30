import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import {PhoneIphone} from 'styled-icons/material/PhoneIphone';
import {Html5} from 'styled-icons/boxicons-logos/Html5';
import {Github} from 'styled-icons/icomoon/Github';
import {ReactLogo} from 'styled-icons/boxicons-logos/ReactLogo';
import {GoogleDrive} from 'styled-icons/fa-brands/GoogleDrive';

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

const Note = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.div`
  padding-right: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const IconsWrapper = styled.div`
  padding-right: 14px;
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
  user-drag: none;
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
            Tx Tracker is a startup using WeWork as their office. Its developer team was quite small at that time. Five people in total including me as their Summer intern in 2018. We all worked remotely and communicated via Skype which is quite challenging for me. I learnt not only how to build app from the scratch, but the ways to play an efficient role in a small developer team as well. Communication and quick prototyping makes app developing agile. After three months endeavor, the first version of Tela App was released on iOS app store. It is a nice app for patients to track their symptoms which in turn gives valuable data to their doctors.<br/>
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
        <Note>
          Most of my personal project is just for fun, so I replace rationale part with some background description.
        </Note>
          <Project>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://github.com/Yuandong-Chen/PersonalWebSite"><IconsWrapper><ReactLogo color="aqua"/></IconsWrapper></Demo>Personal Website</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Description:</Caption>
            Having a simple personal website becomes important for me in 2019. Since I like reading technology and theory books, I have to take some note or write some blogs here. It is also a good way for self-presentation instead of a plain resume.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>Experience:</Caption>
            It is fun to build personal website from the scratch. Yes, I could use WordPress, Hexo... but they all feel like adopted children. Currently, my personal website has no backend. I will keep working on it and add more functions if needed. I think it is a good starting point.
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>ReactJS</TechPoint>
              <TechPoint>Styled Component</TechPoint>
              <TechPoint>SVG animation</TechPoint>
            </ProjectTechs>
          </ProjectCard>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://github.com/Yuandong-Chen/GraphicsLab"><IconsWrapper><Html5 color="red"/></IconsWrapper></Demo>Software 3D Renderer</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Description:</Caption>
            Building software renderer is fundamental in Computer Graphics.
This project is aimed for rendering 3d object with HTML5 canvas 2d API and the only allowed rendering API is setting pixels.
It is an ongoing project based on CSCI 6554 course lab of George Washington University.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What I learnt:</Caption>
            1. Perspective view of the object displayed on the viewport with back faces removed. <br/>
            2. To be continued. (Since it is an onging project)
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>HTML5 Canvas</TechPoint>
              <TechPoint>JavaScript</TechPoint>
              <TechPoint>CSS3</TechPoint>
            </ProjectTechs>
          </ProjectCard>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://github.com/Yuandong-Chen/js2cpp"><IconsWrapper><Github color="black"/></IconsWrapper></Demo>Js2Cpp Transpiler</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Description:</Caption>
            Building a basic JavaScript to C++ transpiler is good practice for compiler course. I first built a YACC-like LR parser, added production rules for JavaScript and finally translated parse tree directly to C++ program. It is an old way to implement DSL. I prefer to use parser combinator library for real world DSL task.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What I learnt:</Caption>
            1. A to B transpiler is always easy if B is a dynamic language or A is strong type static language.<br/>
            2. Frontend knowledge of compiler.
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>C++</TechPoint>
              <TechPoint>JavaScript</TechPoint>
            </ProjectTechs>
          </ProjectCard>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://github.com/Yuandong-Chen/coroutine"><IconsWrapper><Github color="black"/></IconsWrapper></Demo>Coroutine Library</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Description:</Caption>
            After read the source code of Linux 0.11 and Minix2, I felt an impluse to write something. The task scheduler in Minix2 is so smart that I use the same idea to build a coroutine library. It supports billions of coroutines with stack-sharing technology.
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What I learnt:</Caption>
            1. Operating system.<br/>
            2. Computer Architecture.
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>X86/64 Assembly Language</TechPoint>
              <TechPoint>C</TechPoint>
              <TechPoint>Linux</TechPoint>
            </ProjectTechs>
          </ProjectCard>
        </Project>
      </Wrapper>
      <Wrapper>
        <Title>Course Paper</Title>
        <Project>
          <ProjectCard>
            <ProjectName><Demo target="_blank" href="https://docs.google.com/document/d/1ANzJtFO9gpG8hDPrHBL6CMONgm8OGE4qgcFonWb13_o/edit?usp=sharing"><IconsWrapper><GoogleDrive color="khaki"/></IconsWrapper></Demo>Question Answering System for Natural Language Processing Course</ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Background:</Caption>
            Reading Comprehension is one of the first steps to achieve real artificial intelligence in almost every setting. Stanford Question Answering Dataset (SQuAD) is a reading comprehension dataset, consisting of questions posed by crowdworkers on a set of Wikipedia articles, where the answer to every question is a segment of text, or span, from the corresponding reading passage, or the question might be unanswerable.
With the release of Stanford QA dataset (SQuAD), there has been numerous teams trying to improve machine RC. Yet the state-of-art models still trails human performance by huge margin. The engineers of SQuAD build a strong logistic regression model, which achieves an F1 score of 51.0%, a significant improvement over a simple baseline (20%). However, human performance (86.8%) is much higher, indicating that the dataset presents a good challenge problem for future research.
The idea of our project is to build ​a new model​ for the Stanford QA dataset (SQuAD) and has the model officially evaluated. Our goal is not to beat the state-of-art models, but rather to gain a deep understanding of some of those models and potential play around with a few tweaks.We have analyzed the dataset to understand the types of reasoning required to answer the questions, leaning heavily on dependency and constituency trees and built ​a new model​ for the Stanford QA dataset (SQuAD).
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>What we did:</Caption>
            Test and compire two model:<br/>
            1. Naive Bayes Classifier, Logistic Regression Classifier<br/>
            2. BiDirectional Attention Flow, Deep Contextualized Word Embedding
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Technologies:</Caption>
            <ProjectTechs>
              <TechPoint>Python</TechPoint>
              <TechPoint>Scala</TechPoint>
              <TechPoint>PyTorch</TechPoint>
            </ProjectTechs>
          </ProjectCard>
        </Project>
      </Wrapper>
      </div>
    );
  }
}

export {ProjectName, Wrapper, Title, Project, Caption, Delim, ProjectMyJob, ProjectDescription, IconsWrapper, Demo, ProjectTechs, TechPoint, ProjectCard};
export default Projects;
