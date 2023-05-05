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
        I'm Riley
      </SectionTitle>
      <SectionText>
        Software Developer, Tech Enthusiast and currently a Computer Science student at Babcock University
      </SectionText>
      <Button>
      <Link legacyBehavior href="#about">
        <a>
         About
         </a>
      </Link>

 </Button>
    </LeftSection>
  </Section>
);

export default Hero;