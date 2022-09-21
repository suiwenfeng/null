import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFindBlogQuery } from "../../generated/graphql";
import { FooterProps, PureFooter } from "../components/layout/Footer";
import { HeaderProps, PureHeader } from "../components/layout/Header";

export type BlogProps = {
  header: HeaderProps;
  footer: FooterProps;
}

export const Blog = (props: BlogProps & {className?: string}) => {
  const param = useParams();
  const id:number = +param.id!;
  const { data } = useFindBlogQuery({
      variables: {
         id: id
      },
    });
  return (
    <div className={props.className}>
      <PureHeader {...props.header} />
      <article>
        <div dangerouslySetInnerHTML={{ __html: data?.repository?.discussion?.bodyHTML}}></div>
      </article>
      <PureFooter {...props.footer} />
    </div>
  );
};

export const PureBlog = styled(Blog)`

`
