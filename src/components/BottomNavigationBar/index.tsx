import styled from 'styled-components';

import advocate from 'src/assets/icons/advocate.svg';
import latestEvents from 'src/assets/icons/latestEvents.svg';
import policyIssues from 'src/assets/icons/policyIssues.svg';
import smallDonations from 'src/assets/icons/smallDonations.svg';
import publicServiceInbox from 'src/assets/icons/publicServiceInbox.svg';

const Container = styled.nav`
  position: sticky;
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
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 68px;
    cursor: pointer;
    gap: 4px;
    font-size: 10px;
  }
  img {
    height: 24px;
  }
`;

const BottomNavigationBar = () => {
  return (
    <Container>
      <Menu>
        <li>
          <img src={advocate} />
          候選人主張
        </li>
        <li>
          <img src={latestEvents} />
          最新活動
        </li>
        <li>
          <img src={policyIssues} />
          政策議題
        </li>
        <li>
          <img src={smallDonations} />
          小額捐款
        </li>
        <li>
          <img src={publicServiceInbox} />
          民眾服務信箱
        </li>
      </Menu>
    </Container>
  );
};

export default BottomNavigationBar;
