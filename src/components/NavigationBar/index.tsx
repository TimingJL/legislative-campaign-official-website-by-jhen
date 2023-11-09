import * as React from 'react';
import styled from 'styled-components';
import logo from 'src/assets/images/logo.svg';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import youtubeIcon from 'src/assets/icons/youtube.svg';
import { anchorId } from 'src/config/anchor';
import { profile } from 'src/config/profile';

const Container = styled.nav<{ $isOnTop: boolean }>`
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  padding: 16px 24px;
  z-index: 10;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  background: ${props => props.$isOnTop ? 'var(--bg-primary)' : 'transparent'};
  transition: background 0.8s ease-in-out;
  @media ${props => props.theme.device.tablet} {
    padding: 0px;
  }
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
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

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
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
  &:hover {
    opacity: 0.8;
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
  li {
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.9);
      transition: all 0.2s ease-in-out;
    }
  }
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

const options = {
  root: null,
  rootMargin: '50px',
  threshold: 0.5
}

const NavigationBar = () => {
  const anchorRef = React.useRef(null);
  const [isOnTop, setIsOpTop] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callbackFunction = (entires: any) => {
    setIsOpTop(entires[0].isIntersecting);
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (anchorRef.current) {
      observer.observe(anchorRef.current);
    }
  }, []);

  return (
    <>
      <div ref={anchorRef} style={{ position: 'absolute' }} />
      <Container $isOnTop={isOnTop}>
        <Box>
          <Logo href={`#${anchorId.hero}`}>
            <img alt="logo" src={logo} />
            <div className="logo__title">{profile.candidateName}</div>
          </Logo>
          <Menu>
            <li><a href={`#${anchorId.advocate}`}>候選人主張</a></li>
            <li><a href={`#${anchorId.latestEvents}`}>最新活動</a></li>
            <li><a href={`#${anchorId.policyIssues}`}>政策議題</a></li>
            <li><a href={`#${anchorId.donate}`}>小額捐款</a></li>
            <li><a href={`#${anchorId.service}`}>民眾服務信箱</a></li>
          </Menu>
          <SocialMedia>
            <img alt="facebook" className="icon-facebook" src={facebookIcon} />
            <img alt="instagram" className="icon-instagram" src={instagramIcon} />
            <img alt="youtube" className="icon-youtube" src={youtubeIcon} />
          </SocialMedia>
        </Box>
      </Container>
    </>
  );
};

export default NavigationBar;
