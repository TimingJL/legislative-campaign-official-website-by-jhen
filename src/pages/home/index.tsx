import styled from 'styled-components';

import NavigationBar from 'src/components/NavigationBar';
import BottomNavigationBar from 'src/components/BottomNavigationBar';
import Hero from 'src/pages/home/hero';
import Marquee from 'src/pages/home/marquee';
import Advocate from 'src/pages/home/advocate';
import LatestEvents from 'src/pages/home/latestEvents';
import PolicyIssues from 'src/pages/home/policyIssues';
import Actions from 'src/pages/home/actions';
import ButtonSlogan from 'src/pages/home/bottomSlogan';
import Footer from 'src/pages/home/footer';

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
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
        <Marquee />
        <Advocate />
        <LatestEvents />
        <PolicyIssues />
        <Actions />
        <ButtonSlogan />
      </Content>
      <Footer />
      <BottomNavigationBar />
    </Container>
  );
};

export default Home;