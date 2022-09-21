import styled from "styled-components";
import { useFindBlogsQuery } from "../../generated/graphql";
import { PureCard } from "../components/Card";
import { FooterProps, PureFooter } from "../components/layout/Footer";
import { HeaderProps, PureHeader } from "../components/layout/Header";

export type BlogsProps = {
  header: HeaderProps;
  footer: FooterProps;
}

export const Blogs = (props: BlogsProps & {className?: string}) => {
  const { data } = useFindBlogsQuery();
  return (
    <div className={props.className}>
      <PureHeader {...props.header} />
      <main>
        {data?.repository?.discussions.nodes?.map(blog => (
            <PureCard id={blog?.number!} title={blog?.title!} updateAt={blog?.updatedAt} tags={blog!.labels!.nodes!.map(tag => {
              return {id: tag?.id!, name: tag?.name!};
            })}/>
          ))}
      </main>
      <PureFooter {...props.footer} />
    </div>
  );
};

export const PureBlogs = styled(Blogs)`
  main {
    display: flex;
    flex-direction: column;
  }

  ${PureCard} {
    margin: 1rem 0
  }
`
