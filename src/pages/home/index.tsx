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

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Marquee />
      <Advocate />
      <LatestEvents />
      <PolicyIssues />
      <Actions />
      <ButtonSlogan />
      <Footer />
      <BottomNavigationBar />
    </>
  );
};

export default Home;
