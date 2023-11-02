import styled from 'styled-components';

import { GradientText } from 'src/components/styled';
import miaoLiHan from 'src/assets/images/miao-li-han.png';

const Section = styled.section`

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

const Title = styled.div`
  padding: 96px 0px var(--spacer-16, 16px) 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media ${props => props.theme.device.tablet} {
    padding: var(--spacer-32, 32px) 0px var(--spacer-16, 16px) 0px;
  }
`;


const Number = styled.div`
  width: var(--spacer-50, 50px);
  height: var(--spacer-50, 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 100%;
  color: #FFF;
  font-weight: 900;
  font-size: 32px;
  background: var(--primary-gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
  flex: 0 0 50px;
  @media ${props => props.theme.device.tablet} {
    width: var(--spacer-40, 40px);
    height: var(--spacer-40, 40px);
    flex: 0 0 40px;
    font-size: 25px;
  }
`;

const CandidateName = styled.h3`
  color: var(--primary-color, #DA7D4A);
  text-align: center;
  white-space: nowrap;
  font-size: 40px;
  @media ${props => props.theme.device.tablet} {
    font-size: 28px;
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: var(--spacer-16, 16px);
  border: 1px solid var(--default-white, #FFF);
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.20);
  padding: var(--spacer-12, 12px) var(--spacer-16, 16px);
`;

const Tag = styled.h3`
  color: #FFF;
  border-radius: var(--spacer-16, 16px);
  background: var(--text-primary, #334155);
  padding: var(--spacer-12, 12px) var(--spacer-16, 16px);
  width: fit-content;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media ${props => props.theme.device.tablet} {
    flex-direction: column;
  }
`;

const MiaoLiHan = styled.img`
  width: 723px;
  @media ${props => props.theme.device.tablet} {
    width: 343px;
  }
  @media ${props => props.theme.device.mobile} {
    width: 327px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <CenterBox>
        <Title>
          <Slogan>{`台灣的明天\n喵先鋪路`}</Slogan>
          <Stack>
            <Tag>2024 立委參選人</Tag>
            <NameContainer>
              <Number>3</Number>
              <CandidateName>喵立翰 Miao Li-Han</CandidateName>
            </NameContainer>
          </Stack>
        </Title>
        <MiaoLiHan alt="喵立翰 Miao Li-Han" src={miaoLiHan} />
      </CenterBox>
    </Section>
  );
};

export default Hero;