import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1 , text: 'Hackhathons Participated In'},
  { number: 5, text: 'Open Source Projects', },
  { number: 10, text: 'AI Projects started', },
  { number: 15, text: 'Github Repositories', }
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
