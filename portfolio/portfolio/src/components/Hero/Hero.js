import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi <br/>
        I'm Chukwuneku
      </SectionTitle>
      <SectionText>
        Software Developer, Tech Enthusiast and current Computer Science student at Babcock University
      </SectionText>
      <Button onClick={() => window.location="https://github.com/nekumartins"}> About </Button>
    </LeftSection>
  </Section>
);

export default Hero;