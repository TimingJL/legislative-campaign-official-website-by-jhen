import styled from 'styled-components';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import youtubeIcon from 'src/assets/icons/youtube.svg';
import { profile } from 'src/config/profile';

const Container = styled.footer`
  background: var(--bg-secondary, #F7ECE1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 64px 32px;
  @media ${props => props.theme.device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 64px 16px;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 676px;
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
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.div`
  width: 48px;
  height: 48px;
  aspect-ratio: 1;
  box-sizing: border-box;
  background: #FFF;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Stack>
        <NameContainer>
          <Number>3</Number>
          <CandidateName>{profile.candidateName}</CandidateName>
        </NameContainer>
        <SocialMedia>
          <IconButton>
            <img alt="facebook" className="icon-facebook" src={facebookIcon} />
          </IconButton>
          <IconButton>
            <img alt="instagram" className="icon-instagram" src={instagramIcon} />
          </IconButton>
          <IconButton>
            <img alt="youtube" className="icon-youtube" src={youtubeIcon} />
          </IconButton>
        </SocialMedia>
        <div>{`© 2023 ${profile.candidateName} 版權所有`}</div>
      </Stack>
      <Stack>
        <h4>競選總部</h4>
        <div>
          <div>辦公室地址：{profile.address}</div>
          <div>電話：{profile.phone}</div>
          <div>電子郵件地址：{profile.email}</div>
        </div>
      </Stack>
    </Container>
  );
};

export default Footer;