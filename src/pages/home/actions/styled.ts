import styled from 'styled-components';
import Button from 'src/components/Button';

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

export const Grid = styled.div`
  color: var(--text-primary, #334155);
  display: grid;
  grid-template-columns: 731px 1fr;
  gap: 24px;
  @media ${props => props.theme.device.desktop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ActionTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  white-space: pre-line;
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

export const CommonColorBlock = styled.div`
  border-radius: var(--spacer-24, 24px);
  padding: 60px;
  @media ${props => props.theme.device.tablet} {
    padding: 24px 16px;
  }
`;

export const SubmitButton = styled(Button)`
  background: var(--primary, #DA7D4A);
  width: 100%;
  height: 67px;
  font-size: 16px;
  color: #FFF;
  font-weight: 600;
`;
