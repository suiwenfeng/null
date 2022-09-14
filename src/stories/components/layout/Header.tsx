import styled, { StyledProps } from 'styled-components';
import { PureNav, NavItemProps } from "./Nav"
import { LogoLink, LinkProps } from "../Link"

export type HeaderProps = {
  icon: LinkProps
  navs: NavItemProps[]
}

export const Header = (props: StyledProps<HeaderProps>) => (
  <header {...props}>
    <LogoLink href={props.icon.href}>
        {props.icon.children}
    </LogoLink>
    <PureNav items={props.navs} />
  </header>
)

export const PureHeader = styled(Header)`
  display: flex;
  align-items: center;

  ${LogoLink} {
    margin-right: auto;
  }
`