import styled, { StyledProps } from "styled-components";
import { TextLink } from "../Link";

type Who = {
  name: string;
  link: string;
}

type Using = {
  what: string;
  link: string;
}

export type FooterProps = {
  date: string;
  who: Who;
  usings: Using[];
}

export const Footer = (props: StyledProps<FooterProps>) => (
  <footer {...props}>
    <p>© {props.date} All rights reserved | Powered by <TextLink href={props.who.link}>{props.who.name}</TextLink> with {props.usings.map((using, idx) => (<>{idx ? ' and ' : ''}<TextLink href={using.link}>{using.what}</TextLink></>))}</p>
  </footer>
)

export const PureFooter = styled(Footer)`
  p {
    text-align: center;
  }
`;