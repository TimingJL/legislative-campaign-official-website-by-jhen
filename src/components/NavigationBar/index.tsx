import styled from 'styled-components';
import logo from 'src/assets/images/logo.svg';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import youtubeIcon from 'src/assets/icons/youtube.svg';

const Container = styled.nav`
  position: sticky;
  top: 0px;
  padding: 16px 24px;
  background: #fff;
  @media ${props => props.theme.device.desktop} {
    background: var(--bg-primary);
  }
  @media ${props => props.theme.device.tablet} {
    padding: 0px;
  }
`;

const Box = styled.div`
  background: #fff;
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
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
          <li>民眾服務信箱</li>
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
