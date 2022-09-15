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
)

export const TextLink = styled(Link)`

`

export const NavLink = styled(Link)`

`

export const LogoLink = styled(Link)`
  display: flex;
`;

export const SocialLink = styled(Link)`

`;

export const ButtonLink = styled(Link)`

`