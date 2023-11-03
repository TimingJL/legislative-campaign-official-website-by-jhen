import styled from 'styled-components';

import advocate from 'src/assets/icons/advocate.svg';
import latestEvents from 'src/assets/icons/latestEvents.svg';
import policyIssues from 'src/assets/icons/policyIssues.svg';
import smallDonations from 'src/assets/icons/smallDonations.svg';
import publicServiceInbox from 'src/assets/icons/publicServiceInbox.svg';
import { AnchorId } from 'src/config';

const Container = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.90);
  display: none;
  height: 68px;
  @media ${props => props.theme.device.desktop} {
    display: block;
  }
`;

const Menu = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  img {
    height: 24px;
  }
  a {
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    cursor: pointer;
  }
`;

const BottomNavigationBar = () => {
  return (
    <Container>
      <Menu>
        <li>
          <a href={`#${AnchorId.advocate}`}>
            <img src={advocate} />
            候選人主張
          </a>
        </li>
        <li>
          <a href={`#${AnchorId.latestEvents}`}>
            <img src={latestEvents} />
            最新活動
          </a>
        </li>
        <li>
          <a href={`#${AnchorId.policyIssues}`}>
            <img src={policyIssues} />
            政策議題
          </a>
        </li>
        <li>
          <a href={`#${AnchorId.donate}`}>
            <img src={smallDonations} />
            小額捐款
          </a>
        </li>
        <li>
          <a href={`#${AnchorId.service}`}>
            <img src={publicServiceInbox} />
            民眾服務信箱
          </a>
        </li>
      </Menu>
    </Container>
  );
};

export default BottomNavigationBar;
