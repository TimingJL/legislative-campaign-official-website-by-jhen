import styled from 'styled-components';
import Donate from './Donate';
import Service from './Service';

const Section = styled.section`
  background: #FFF;
  padding: 104px 36px;
  @media ${props => props.theme.device.tablet} {
    padding: 64px 36px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 64px 16px;
  }
`;

const CenterBox = styled.div`
  width: 100%;
  & > div {
    margin: 64px auto 0px;
  }
  @media ${props => props.theme.device.mobile} {
    margin: 40px auto 0px;
  }
`;

const CardsGroup = styled.div`
  width: 100%;
  max-width: 1320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  @media ${props => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Actions = () => {
  return (
    <Section>
      <CenterBox>
        <CardsGroup>
          <Donate />
          <Service />
        </CardsGroup>
      </CenterBox>
    </Section>
  );
};

export default Actions;
