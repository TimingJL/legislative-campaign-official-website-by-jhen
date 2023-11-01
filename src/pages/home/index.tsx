import styled from 'styled-components';

import NavigationBar from 'src/components/NavigationBar';
import BottomNavigationBar from 'src/components/BottomNavigationBar';

const Container = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
`;

const Content = styled.div`
  flex: 1 1 auto;
`;

const Home = () => {
  return (
    <Container>
      <NavigationBar />
      <Content>Home</Content>
      <BottomNavigationBar />
    </Container>
  );
};

export default Home;
