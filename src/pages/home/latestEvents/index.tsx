import styled from 'styled-components';
import SectionTitle from 'src/components/SectionTitle';

const Section = styled.section`
  background: #FFF;
`;

const LatestEvents = () => {
  return (
    <Section>
      <SectionTitle
        tag="LATEST EVENTS"
        title="最新活動"
      />
      LatestEvents
    </Section>
  );
};

export default LatestEvents;