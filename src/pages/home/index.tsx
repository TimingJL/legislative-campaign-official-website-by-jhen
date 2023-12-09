import * as React from 'react';
import styled from 'styled-components';
import Lottie from "lottie-react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useFontFaceObserver from 'use-font-face-observer';

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

import { loadingAnimation } from 'src/assets/lotties/loading.js';

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
  const isFontLoaded = useFontFaceObserver([
    { family: 'Mantou Sans' }, // Same name you have in your CSS
  ]);

  React.useEffect(() => {
    const handleOnLoaded = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
    window.addEventListener('load', handleOnLoaded);
    return () => {
      window.removeEventListener('load', handleOnLoaded);
    };
  }, [])

  if (isLoading || !isFontLoaded) {
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
