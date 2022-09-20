import styled from 'styled-components';
import { NavLink } from '../Link';

export type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
}

export type NavProps = {
  items: NavItemProps[]
}

export const Nav = (props: NavProps & {className?: string}) => (
  <ul className={props.className}>
    {props.items.map((item, i) => (
      <li>
        <NavLink href={item.href}>{item.text}</NavLink>
      </li>
    ))}
  </ul>
)

export const PureNav = styled(Nav)`
  display: flex;
  list-style: none;

  li {
    padding: 0 1rem;
  }
`