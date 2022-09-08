import styled from 'styled-components';

export type IconProps = {
  className: string;
  link: string;
  children: React.ReactNode;
};

export const Icon = (props: IconProps) => (
  <a href={props.link} className={props.className}>
    {props.children}
  </a>
);

export const LogoIcon = styled(Icon)`
  margin: 10px;
  background-color: green;
`;

export const SocialIcon = styled(Icon)`
  margin: 10px;
  background-color: red;
`;