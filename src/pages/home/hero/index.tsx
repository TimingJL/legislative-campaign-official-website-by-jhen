import styled from 'styled-components';

import { GradientText } from 'src/components/styled';
import miaoLiHan from 'src/assets/images/miao-li-han.png';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import youtubeIcon from 'src/assets/icons/youtube.svg';
import { aosProps } from 'src/utils/aos';

const Section = styled.section``;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-y: hidden;
`;

const Slogan = styled(GradientText)`
  font-size: 64px;
  letter-spacing: 2px;
  line-height: 105%; /* 54.6px */
  @media ${props => props.theme.device.tablet} {
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
  white-space: nowrap;
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
  white-space: nowrap;
  @media ${props => props.theme.device.tablet} {
    font-size: 20px;
  }
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media ${props => props.theme.device.tablet} {
    flex-direction: column;
    gap: 4px;
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

const SocialMedia = styled.div`
  gap: 16px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #FFF;
  margin: 12px;
  padding: var(--spacer-8, 8px) var(--spacer-40, 40px);
  border-radius: var(--spacer-12, 12px);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  & > img {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.9);
      transition: all 0.2s ease-in-out;
    }
  }
  display: none;
  @media ${props => props.theme.device.tablet} {
    display: flex;
  }
`;

const Hero = () => {
  return (
    <Section>
      <CenterBox>
        <Title>
          <Slogan {...aosProps({ order: 0 })}>{`台灣的明天\n喵先鋪路`}</Slogan>
          <Stack>
            <Tag {...aosProps({ order: 1 })}>2024 立委參選人</Tag>
            <NameContainer {...aosProps({ order: 2 })}>
              <Number>3</Number>
              <CandidateName>喵立翰 Miao Li-Han</CandidateName>
            </NameContainer>
          </Stack>
        </Title>
        <MiaoLiHan alt="喵立翰 Miao Li-Han" src={miaoLiHan} {...aosProps({ order: 3 })} />
        <SocialMedia>
          <img alt="facebook" className="icon-facebook" src={facebookIcon} />
          <img alt="instagram" className="icon-instagram" src={instagramIcon} />
          <img alt="youtube" className="icon-youtube" src={youtubeIcon} />
        </SocialMedia>
      </CenterBox>
    </Section>
  );
};

export default Hero;