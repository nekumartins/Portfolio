import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi <br/>
        I'm Chukwuneku,
      </SectionTitle>
      <SectionText>
      A Beta Microsoft Learn Student Ambassador at Babcock University, specializing in backend software engineering with Django, certified in Azure and Oracle Cloud Infrastructure, and passionate about data science and machine learning
      </SectionText>
      <Button>
      <Link legacyBehavior href="https://drive.google.com/file/d/1tzNtOLurhP37HCulleLWtvp6LmQdFj9x/view?usp=drive_link">
        <a>
        Resume
         </a>
      </Link>

 </Button>
    </LeftSection>
  </Section>
);

export default Hero;