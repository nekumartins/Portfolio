import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2 , text: 'Microsoft Certified'},
  { number: 3 , text: 'Hackhathons Participated In'},
  { number: 500, text: 'Students Tutored' },
  { number: 15, text: 'Open Source Projects', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>

      </Box>
    ))}
  </Boxes>
  </Section>
);

export default Acomplishments;
