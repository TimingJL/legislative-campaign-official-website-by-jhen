import styled, { keyframes } from 'styled-components';

const marqee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc(-100% - 24px));
  }
`;

const Section = styled.section`
  width: 100vw;
  overflow: hidden;
`;

const Container = styled.div`
  background: var(--primary-color, #DA7D4A);
  padding: 10px;
  height: 67px;
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 24px;
  .marquee__content {
    white-space: nowrap;
    color: var(--default-white, #FFF);
    font-family: Mantou Sans;
    font-size: 64px;
    line-height: 105%; /* 67.2px */
    letter-spacing: 2px;
    animation: ${marqee} 15s linear infinite;
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: 24px;
  }
  @media ${props => props.theme.device.tablet} {
    height: 42px;
    .marquee__content {
      font-size: 40px;
    }
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container>
        <ul className="marquee__content">
          <li>為喵星人，護台灣！</li>
          <li>從喵的眼中，看見台灣</li>
          <li>喵的未來，人的希望</li>
        </ul>
        <ul className="marquee__content" aria-hidden="true">
          <li>為喵星人，護台灣！</li>
          <li>從喵的眼中，看見台灣</li>
          <li>喵的未來，人的希望</li>
        </ul>
      </Container>
    </Section>
  );
};

export default Marquee;
