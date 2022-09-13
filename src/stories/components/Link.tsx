import styled from 'styled-components';
import { StyledProps } from 'styled-components'; 

export interface LinkProps {
  href: string;
  children: React.ReactNode;
};

export const Link = (props: StyledProps<LinkProps>) => (
  <a {...props}>
    {props.children}
  </a>
);

export const NavLink = styled(Link)`

`

export const LogoLink = styled(Link)`

`;

export const SocialLink = styled(Link)`

`;