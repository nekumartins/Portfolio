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
        Software & ML Engineer, Tech Enthusiast and Computer Science Major at Babcock University
      </SectionText>
      <Button>
      <Link legacyBehavior href="https://drive.google.com/file/d/1tzNtOLurhP37HCulleLWtvp6LmQdFj9x/view?usp=drivesdk">
        <a>
        My CV
         </a>
      </Link>

 </Button>
    </LeftSection>
  </Section>
);

export default Hero;