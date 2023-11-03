import styled from 'styled-components';
import logo from 'src/assets/images/logo.svg';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import youtubeIcon from 'src/assets/icons/youtube.svg';
import { AnchorId } from 'src/config';

const Container = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  padding: 16px 24px;
  z-index: 10;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  @media ${props => props.theme.device.tablet} {
    padding: 0px;
  }
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.90);
  display: flex;
  padding: var(--spacer-12, 12px) var(--spacer-24, 24px);
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  @media ${props => props.theme.device.tablet} {
    border-radius: 0px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 52.169px;
    height: 43px;
    object-fit: cover;
  }
  .logo__title {
    color: var(--primary, #DA7D4A);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
  }
  @media ${props => props.theme.device.tablet} {
    gap: 4px;
    img {
      width: 34px;
      height: 28px;
    }
    .logo__title {
      font-size: 20px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 32px;
  cursor: pointer;
  @media ${props => props.theme.device.desktop} {
    display: none;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  img {
    cursor: pointer;
    object-fit: contain;
    width: 32px;
    height: 32px;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.9);
      transition: all 0.2s ease-in-out;
    }
  }
  @media ${props => props.theme.device.tablet} {
    display: none;
  }
`;

const NavigationBar = () => {
  return (
    <Container>
      <Box>
        <Logo>
          <img alt="logo" src={logo} />
          <div className="logo__title">喵立翰 Miao Li-Han</div>
        </Logo>
        <Menu>
          <li><a href={`#${AnchorId.advocate}`}>候選人主張</a></li>
          <li><a href={`#${AnchorId.latestEvents}`}>最新活動</a></li>
          <li><a href={`#${AnchorId.policyIssues}`}>政策議題</a></li>
          <li><a href={`#${AnchorId.donate}`}>小額捐款</a></li>
          <li><a href={`#${AnchorId.service}`}>民眾服務信箱</a></li>
        </Menu>
        <SocialMedia>
          <img alt="facebook" className="icon-facebook" src={facebookIcon} />
          <img alt="instagram" className="icon-instagram" src={instagramIcon} />
          <img alt="youtube" className="icon-youtube" src={youtubeIcon} />
        </SocialMedia>
      </Box>
    </Container>
  );
};

export default NavigationBar;
