import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Github} from 'styled-icons/icomoon/Github';
import {Email} from 'styled-icons/material/Email';
import {StackOverflow} from 'styled-icons/boxicons-logos/StackOverflow';
import leetcode from '../data/LeetCode_logo.png';
import resume from '../data/resume2.pdf'
import {ProjectName, Wrapper, Title, Project, Caption, Delim, ProjectMyJob, ProjectDescription, IconsWrapper, Demo, ProjectTechs, TechPoint, ProjectCard} from './Projects';

const LeetCode = styled.img`
  display: inline-block;
  position: relative
  top: -2px;
  left: -5px;
  width: 50px;
  user-drag:none;
`;

const MTechPoint = styled(TechPoint)`
  list-style-type: none;
`;

class AboutMe extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title><Demo href={resume}>Download Resume (Open for hiring)</Demo></Title>
        <Project>
          <ProjectCard>
            <ProjectName></ProjectName>
            <Delim></Delim>
            <ProjectDescription>
            <Caption>Education:</Caption>
            The George Washington University, School of Engineering and Applied Science Washington, DC<br/>
            Master of Computer Science GPA 3.7 Aug 2017 - present<br/><br/>
            University of California, San Diego, Jacobs School of Engineering<br/>
            Master of Science and Engineering GPA 3.3 Dec 2015<br/><br/>
            Harbin Institute of Technology, Engineering School<br/>
            Bachelor of Engineering, Material Physics GPA 3.5 July 2014<br/>
            </ProjectDescription>
            <ProjectMyJob>
            <Caption>I'm a book list maniac, I finished reading the following books from 2016 to 2018 (I have to remind you that I decide to change my specialization in 2016):</Caption>
            <ol>
              <li>跟我一起写 Makefile - 陈皓</li>
              <li>Classic Shell Scriping - Arnold Robbins</li>
              <li>Linux C/C++ - 位元文化</li>
              <li>The C Programming Language - Brian W. Kernichan</li>
              <li>C Interfaces and Implimentations - David R. Hanson</li>
              <li>C++ Prime - Stanley B. Lippman</li>
              <li>C++ Concurrency in Action - Antony Williams</li>
              <li>鸟哥的Linux私房菜基础版</li>
              <li>Understanding Unix/Linux Programming - Molay,B</li>
              <li>Advanced Programming in the Unix Environment - W. Richard Stevens</li>
              <li>Computer Systems A Programmer's Perspective - Randal E. Bryant</li>
              <li>Computer Networking A Top-Down Approach - James F. Kurose</li>
              <li>TCP/IP Illustrated Vol1 - W. Richard Stevens</li>
              <li>TCP/IP Illustrated Vol2 - W. Richard Stevens</li>
              <li>Assembly Language - 王爽</li>
              <li>Profession Assembly Language - Richard Blum</li>
              <li>X86汇编语言 从实模式到保护模式 - 李忠</li>
              <li>Orange'S 一个操作系统的实现- 赵炯</li>
              <li>Linux内核完全剖析 - 赵炯</li>
              <li>JavaScript The Good Part - Douglas Crockford</li>
              <li>FullStack React The Complete Guide to ReactJS and Friends - Nate Murray</li>
              <li>Programming Erlang - Joe Armstrong</li>
              <li>Learn  You Some Erlang For Great Good - Fred Hebert</li>
              <li>Mnesia User Manual</li>
              <li>Erlang Programming - Francesco Cesarini</li>
              <li>Erlang and OTP in Action - Martin Logan</li>
              <li>Designing for Scalability Erlang/OTP - Francesco Cesarini</li>
              <li>Programming Elixir - Dave Thomas</li>
              <li>Metaprogramming Elixir - Chris MacCord</li>
              <li>The Little Elixir and OTP Guidbook - Benjamin Tan Wei Hao</li>
              <li>Elixir in Action - Sasa Juric</li>
              <li>Programming Phoenix - Chris McCord</li>
              <li>What's new in Ecto 2.0 - plataformatec</li>
              <li>Functional Web Development with Elixir, OTP and Phoenix - Lance Halvorsen</li>
              <li>Craft GraphQL APIs in Elixir with Absinthe - Bruce Williams</li>
              <li>Programming in Scala - Martin Odersky</li>
              <li>Functional Programming in Scala - Paul Chiusano</li>
              <li>Scala with CAT - Noel Welsh</li>
              <li>The Type Astronaut's Guide to Shapeless - Dave Gurnell</li>
              <li>Fluent Python - Luciano Ramalho</li>
              <li>Practical Vim - Drew Neil</li>
              <li>Modern Vim - Drew Neil</li>
              <li>Core Java Vol1 - Cay S. Horstmann</li>
              <li>Designing Data Intensive Applications - Martin Kleppmann</li>
              <li>Streamming Systems - Tyler Akidau</li>
              <li>Analysis and design of algorithms - Amerinder Arora (GWU Professor teaching our algorithm course)</li>
              <li>An Introduction to Statistical Learning with Applications in R - Gareth James</li>
              <li>Speech and Language Processing An Introduction to Natural Language Processing, Computational Linguistics, and Speech Recognition - James H. Martin</li>
            </ol>
            Next Book in my plan:
            Introduction to Distributed Algorithms - Gerard Tel
            </ProjectMyJob>
            <Delim></Delim>
            <Caption>Contact Me:</Caption>
            <ProjectTechs>
              <MTechPoint><IconsWrapper><Demo target="_blank" href="https://github.com/Yuandong-Chen/"><Github color="black"/></Demo></IconsWrapper></MTechPoint>
              <MTechPoint><IconsWrapper><Demo target="_blank" href="https://leetcode.com/yuandong-chen/"><LeetCode src={leetcode} color="black"/></Demo></IconsWrapper></MTechPoint>
              <MTechPoint><IconsWrapper><Demo target="_blank" href="mailto:zyz2118acz@gwmail.gwu.edu"><Email color="darkred"/></Demo></IconsWrapper></MTechPoint>
              <MTechPoint><IconsWrapper><Demo target="_blank" href="https://stackoverflow.com/users/5304662/chenyuandong?tab=profile"><StackOverflow color="orange"/></Demo></IconsWrapper></MTechPoint>
            </ProjectTechs>
          </ProjectCard>
        </Project>
      </Wrapper>
    );
  }
}

export default AboutMe;
