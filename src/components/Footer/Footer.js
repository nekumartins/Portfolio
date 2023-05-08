import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillRead, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Phone</LinkTitle>
      <LinkItem href ="tel:+2348101694302">+2348101694302</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href ="mailto:akpotohwoo@gmail.com">akpotohwoo@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Be Better always</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/nekumartins">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/chukwuneku-akpotohwo-148056274">
          <AiFillLinkedin size="3rem" />
        </SocialIcons> <SocialIcons href="https://twitter.com/nekumartins">
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
          </FooterWrapper>
  );
};

export default Footer;
