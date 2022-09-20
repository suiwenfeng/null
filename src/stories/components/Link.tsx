import styled from 'styled-components';

export type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const Link = (props: LinkProps & {className?: string}) => (
  <a {...props}>
    {props.children}
  </a>
);

export const TextLink = styled(Link)`

`;

export const NavLink = styled(Link)`

`;

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
`;