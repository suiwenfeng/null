import styled from "styled-components";
import { FooterProps, PureFooter } from "../components/layout/Footer";
import { HeaderProps, PureHeader } from "../components/layout/Header";

export type BlogProps = {
  header: HeaderProps;
  footer: FooterProps;
}

export const Blog = (props: BlogProps & {className?: string}) => {
  const { data } = useFindBlogQuery({
      variables: {
         id: props
      },
    });
  return (
    <div className={props.className}>
      <PureHeader {...props.header} />
      <article>
        
      </article>
      <PureFooter {...props.footer} />
    </div>
  );
};

export const PureBlog = styled(Blog)`
  main {
    display: flex;
    flex-direction: column;
  }

  ${PureCard} {
    margin: 1rem 0
  }
`
