import styled from 'styled-components';

export const CommonBox = styled.div`
  scroll-margin-top: 120px;
  border-radius: var(--spacer-32, 32px);
  padding: var(--spacer-96, 96px);
  color: var(--default-white, #FFF);
  .action__title {
    white-space: nowrap;
    font-family: Mantou Sans;
    font-size: 52px;
  }
  .action__description {
    font-size: 20px;
    font-weight: 600;
    min-height: 60px;
  }
  .action__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-end;
    gap: 24px;
  }
  .donate__img {
    width: 100%;
    object-fit: contain;
  }
  h6 {
    white-space: nowrap;
  }
  @media ${props => props.theme.device.desktop} {
    padding: var(--spacer-40, 40px) var(--spacer-24, 24px);
    .action__title {
      font-size: 40px;
    }
  }
`;
