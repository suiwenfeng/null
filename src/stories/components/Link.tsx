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

`;

export const SocialLink = styled(Link)`
  margin: 0.5rem 1rem;
`;

export const ButtonLink = styled(Link)`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 0.375rem;
  background-color: gray;
  color: white;
  text-decoration: none;
`