import styled from 'styled-components';
import { GradientText } from 'src/components/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.h6`
  border-radius: var(--spacer-8, 8px);
  background: var(--text-primary-700, #334155);
  color: #FFF;
  width: fit-content;
  padding: var(--spacer-8, 8px) var(--spacer-12, 12px);
`;

const StyledGradientText = styled(GradientText)`
  font-size: 64px;
  @media ${props => props.theme.device.desktop} {
    font-size: 52px;
  }
`;

interface IProps {
  tag: string;
  title: string;
}

const SectionTitle = ({ tag, title, ...otherProps }: IProps) => {
  return (
    <Container {...otherProps}>
      <Tag>{tag}</Tag>
      <StyledGradientText>{title}</StyledGradientText>
    </Container>
  );
};

export default SectionTitle;
