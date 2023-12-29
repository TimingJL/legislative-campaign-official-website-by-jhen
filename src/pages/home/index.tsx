import * as React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";

import NavigationBar from "src/components/NavigationBar";
import BottomNavigationBar from "src/components/BottomNavigationBar";
import Hero from "src/pages/home/hero";
import Marquee from "src/pages/home/marquee";
import Advocate from "src/pages/home/advocate";
import LatestEvents from "src/pages/home/latestEvents";
import PolicyIssues from "src/pages/home/policyIssues";
import Actions from "src/pages/home/actions";
import ButtonSlogan from "src/pages/home/bottomSlogan";
import Footer from "src/pages/home/footer";

import { loadingAnimation } from "src/assets/lotties/loading.js";

const Loading = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    window.onload = function () {
      setIsLoading(false);
    };
    setTimeout(() => {
      // if not loaded after 2s, stop loading
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <Lottie animationData={loadingAnimation} loop={true} />
      </Loading>
    );
  }

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
