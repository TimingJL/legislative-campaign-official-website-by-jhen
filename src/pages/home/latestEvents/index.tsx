import * as React from 'react';
import styled from 'styled-components';

import SectionTitle from 'src/components/SectionTitle';
import { AnchorId } from 'src/config';
import Modal from 'src/components/Modal';
import { events } from './data';

const Section = styled.section`
  scroll-margin-top: 20px;
  background: #FFF;
  padding: 104px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.device.tablet} {
    padding: 64px 36px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 64px 16px;
  }
`;

const CenterBox = styled.div`
  margin-top: 64px;
  background: #FFF;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1320px;
  width: 100%;
  overflow: hidden;
  @media ${props => props.theme.device.desktop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HeadlineImg = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 16px;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 200px;
  @media ${props => props.theme.device.desktop} {
    width: 110px;
  }
`;

const HeadlineCard = styled.div`
  cursor: pointer;
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .card__date {
    font-size: 14px;
    color: var(--slate-400);
  }
  .card__title {
    color: var(--text-primary, #334155);
    font-size: 20px;
  }
  .card__description {
    color: var(--text-primary, #334155);
  }
`;

const Events = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EventCard = styled.div`
  cursor: pointer;
  display: flex;
  gap: 16px;
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .card__date {
    font-size: 14px;
    color: var(--slate-400);
  }
  .card__title {
    color: var(--text-primary, #334155);
    font-size: 16px;
  }
  .card__description {
    color: var(--text-primary, #334155);
  }
  .overflow-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

const LatestEvents = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<number | null>(null);
  const pinnedEvent = events.find(event => event.pin) || events[0];
  const unpinnedEvent = events.filter(event => !event.pin);
  return (
    <>
      <Section id={AnchorId.latestEvents}>
        <SectionTitle
          tag="LATEST EVENTS"
          title="最新活動"
        />
        <CenterBox>
          <HeadlineCard onClick={() => setSelectedEvent(pinnedEvent.id)}>
            <HeadlineImg src={pinnedEvent.imgSrc} />
            <div className="card__content">
              <div className="card__date">{pinnedEvent.date}</div>
              <h5 className="card__title">{pinnedEvent.title}</h5>
              <div className="card__description">{pinnedEvent.description}</div>
            </div>
          </HeadlineCard>
          <Events>
            {[...unpinnedEvent, pinnedEvent].map(event => {
              return (
                <EventCard key={event.title} onClick={() => setSelectedEvent(event.id)}>
                  <Img src={event.imgSrc}/>
                  <div className="card__content">
                    <div className="card__date">{event.date}</div>
                    <h5 className="card__title">{event.title}</h5>
                    <div className="card__description overflow-ellipsis">{event.description}</div>
                  </div>
                </EventCard>
              );
            })}
          </Events>
        </CenterBox>
      </Section>
      <Modal
        title="最新活動"
        content={(
          <div>Content</div>
        )}
        open={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default LatestEvents;
