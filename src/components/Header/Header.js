import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
      <Link legacyBehavior href="/" passHref>
      <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom:'20' }}>
      <DiCssdeck size="3rem" /> <Span>Portfolio</Span> 
      </a>
      </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink> Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink> Technologies</NavLink>
          </Link>
        </li> <li>
          <Link href="#about">
            <NavLink> About Me</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/nekumartins">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/chukwuneku-akpotohwo-148056274">
          <AiFillLinkedin size="3rem" />
        </SocialIcons> <SocialIcons href="https://twitter.com/blameriley?t=urfz-dt6740_jD7nPG6WgA&s=09">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
