import styled from 'styled-components';

const Container = styled.nav`
  position: sticky;
  bottom: 0px;
`;

const BottomNavigationBar = () => {
  return (
    <Container>
      <h1>BottomNavigationBar</h1>
    </Container>
  )
};

export default BottomNavigationBar;
