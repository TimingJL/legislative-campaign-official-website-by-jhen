import styled from 'styled-components';

import NavigationBar from 'src/components/NavigationBar';
import BottomNavigationBar from 'src/components/BottomNavigationBar';
import Hero from 'src/pages/home/hero';
import LatestEvents from 'src/pages/home/latestEvents';
import PolicyIssues from 'src/pages/home/policyIssues';
import SmallDonations from 'src/pages/home/smallDonations';
import PublicServiceInbox from 'src/pages/home/publicServiceInbox';
import Footer from 'src/pages/home/footer';

const Container = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
`;

const Content = styled.main`
  flex: 1 1 auto;
`;

const Home = () => {
  return (
    <Container>
      <NavigationBar />
      <Content>
        <Hero />
        <LatestEvents />
        <PolicyIssues />
        <SmallDonations />
        <PublicServiceInbox />
      </Content>
      <Footer />
      <BottomNavigationBar />
    </Container>
  );
};

export default Home;
