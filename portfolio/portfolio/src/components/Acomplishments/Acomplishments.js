import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1 , text: 'Hackhathons Participated In'},
  { number: 10, text: 'AI Projects started', },
  { number: 10, text: 'Github Repositories', },
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
