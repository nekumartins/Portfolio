import React from 'react';
import { DiFirebase, DiGit, DiGithub, DiNpm, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development, python and Machine Learning
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Django <br />
            Flask <br />
            FastApi <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python <br />
            Java <br />
            JavaScript <br />
            C\C++ <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNpm size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks & Libraries</ListTitle>
          <ListParagraph>
            Numpy<br />
            Pandas <br />
            Scikit-Learn<br />
            Tensorflow<br/>
            Spring <br />
            PyTorch 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithub size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Infrastructure</ListTitle>
          <ListParagraph>
            Github <br />
            Microsoft Azure <br />
            Oracle Cloud Infrastructure <br />
            Heroku <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Git <br />
            Anaconda <br />
            Postgresql<br/>
            Mysql
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
