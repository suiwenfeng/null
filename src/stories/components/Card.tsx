import styled from 'styled-components';
import { PureNav } from './layout/Nav';

export type Tag = {
  id: string;
  name: string;
}

export type CardProps = {
  id: number;
  title: string;
  updateAt: string;
  tags?: Tag[];
};

export const Card = (props: CardProps & {className?: string}) => (
  <a className={props.className} href={"/blog/"+props.id}>
    <div className='title'>
      <h2>{props.title}</h2>
    </div>
    <div className='meta'>
      <PureNav className='meta-tags' items={props.tags?.map(tag => {
        return {href: "", text: tag.name};
      })}/>
      <div className='meta-time'>
        {props.updateAt}
      </div>
    </div>
  </a>
);

export const PureCard = styled(Card)`
  display: flex;
  flex-direction: column;
  border-style: dashed;
  border-width: 0.125rem;

  .meta {
    display: flex;
    align-items: center;
  }

  .meta-tags {
    margin-right: auto;
  }
`;