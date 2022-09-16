import React from 'react';
import { FooterProps, PureFooter } from '../components/layout/Footer';
import { HeaderProps, PureHeader } from '../components/layout/Header';
import { ButtonLink, SocialLink } from '../components/Link';
import styled, { StyledProps } from 'styled-components';

export type SocialIcon = {
  link: string;
  icon: React.ReactNode;
}

export type Endpoint = {
  link: string;
  name: string;
}

export type Main = {
  logo: string;
  name: string;
  bio: string;
  socialIcons: SocialIcon[];
  endpoints: Endpoint[];
}

export type HomeProps = {
  header: HeaderProps;
  main: Main;
  footer: FooterProps;
}

export const Home = (props: StyledProps<HomeProps>) => (
  <div {...props}>
    <PureHeader {...props.header} />
    <main>
      <img title={"logo"} src={props.main.logo} width={150} height={150}/>
      <h2>{props.main.name}</h2>
      <p>{props.main.bio}</p>
      <div className="social-icons">
        {props.main.socialIcons.map(icon => (
          <SocialLink href={icon.link}>{icon.icon}</SocialLink>
        ))}
      </div>
      <div className="buttons">
        {props.main.endpoints.map(endpoint => (
          <ButtonLink href={endpoint.link}>{endpoint.name}</ButtonLink>
        ))}
      </div>
    </main>
    <PureFooter {...props.footer} />
  </div>
);

export const PureHome = styled(Home)`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
  }

  .buttons {
    margin: 1rem 0;
  }

  img {
    border-radius: 50%;
  }
`
