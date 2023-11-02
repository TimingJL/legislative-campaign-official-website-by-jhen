import styled from 'styled-components';
import { GradientText } from 'src/components/styled';

const Section = styled.section`
  background: #FFF;
  padding: 104px 36px;
  @media ${props => props.theme.device.tablet} {
    padding: 104px 36px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 104px 16px;
  }
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled(GradientText)`
  font-size: 64px;
  letter-spacing: 2px;
  @media
    ${props => props.theme.device.tablet},
    ${props => props.theme.device.mobile},
  {
    font-size: 52px;
    white-space: pre-line;
    text-align: center;
  }
`;

const Number = styled.div`
  width: var(--spacer-32, 32px);
  height: var(--spacer-32, 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 100%;
  color: #FFF;
  font-weight: 900;
  font-size: 20px;
  background: var(--primary-gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
  flex: 0 0 32px;
`;

const CandidateName = styled.h3`
  color: var(--primary-color, #DA7D4A);
  text-align: center;
  white-space: nowrap;
  font-size: 40px;
  @media
    ${props => props.theme.device.tablet},
    ${props => props.theme.device.mobile},
  {
    font-size: 24px;
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 24px;
`;

const ButtonSlogan = () => {
  return (
    <Section>
      <CenterBox>
        <Slogan>{`台灣的明天\n喵先鋪路`}</Slogan>
        <NameContainer>
          <Number>3</Number>
          <CandidateName>喵立翰 Miao Li-Han</CandidateName>
        </NameContainer>
      </CenterBox>
    </Section>
  );
};

export default ButtonSlogan;
