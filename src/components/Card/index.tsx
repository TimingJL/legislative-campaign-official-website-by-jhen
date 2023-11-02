import styled from 'styled-components';

const Container = styled.div`
  background: #FFF;
  border-radius: var(--spacer-32, 32px);
  img {
    border-radius: var(--spacer-24, 24px);
    object-fit: cover;
    width: 100%;
  }
  .card__content {
    padding: 0px 16px 16px;
  }
  .card-content__title {
    white-space: pre-line;
  }
  @media ${props => props.theme.device.desktop} {
    padding: 16px;
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

interface IProps {
  imgSrc: string;
  title: string;
  tag: string;
  tagColor?: string;
}

const Card = (props: IProps) => {
  const { imgSrc, title, tag, tagColor } = props;
  return (
    <Container className="card">
      <div className="card__content">
        <div style={{ display: 'none', background: tagColor }}>{tag}</div>
        <h4 className="card-content__title">{title}</h4>
      </div>
      <img src={imgSrc} alt={title} />
    </Container>
  );
};

export default Card;
