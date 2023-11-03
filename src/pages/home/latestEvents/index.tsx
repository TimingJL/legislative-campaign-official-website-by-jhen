import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';

import SectionTitle from 'src/components/SectionTitle';
import { AnchorId } from 'src/config';
import Modal from 'src/components/Modal';
import facebookIcon from 'src/assets/icons/facebook.svg';
import instagramIcon from 'src/assets/icons/instagram.svg';
import lineIcon from 'src/assets/icons/line.svg';
import twitterIcon from 'src/assets/icons/twitter.svg';

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

const CardDate = styled.div`
  font-size: 14px;
  color: var(--slate-400);
`;

const HeadlineCard = styled.div`
  cursor: pointer;
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
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

const IconButton = styled.img`
  cursor: pointer;
`;

const Grid = styled.div`
  color: var(--text-primary, #334155);
  display: grid;
  grid-template-columns: 507px 1fr;
  gap: 32px;
  @media ${props => props.theme.device.desktop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EventTitle = styled.div`
  color: var(--primary-color, #DA7D4A);
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  @media ${props => props.theme.device.tablet} {
    font-size: 20px;
  }
`;

const EventDescription = styled.div`
  padding-top: 32px;
  padding-bottom: 96px;
`;

const MoreEventBlock = styled.div`
  padding: var(--spacer-16, 16px);
  background: var(--slate-50, #F8FAFC);
  border-radius: var(--spacer-12, 12px);
  .more-event__title {
    font-weight: 600;
  }
`;

const MoreEvents = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  @media ${props => props.theme.device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(147px, 1fr));
  }
`;

const LatestEvents = () => {
  const [selectedEventId, setSelectedEventId] = React.useState<number | null>(null);
  const pinnedEvent = events.find(event => event.pin) || events[0];
  const unpinnedEvent = events.filter(event => !event.pin);
  const selectedEvent = events.find(event => event.id === selectedEventId) || {
    imgSrc: '',
    title: '',
    description: '',
    date: '',
  };
  const unselectedEvents = events.filter(event => event.id !== selectedEventId);
  return (
    <>
      <Section id={AnchorId.latestEvents}>
        <SectionTitle
          tag="LATEST EVENTS"
          title="最新活動"
        />
        <CenterBox>
          <HeadlineCard onClick={() => setSelectedEventId(pinnedEvent.id)}>
            <HeadlineImg src={pinnedEvent.imgSrc} />
            <div className="card__content">
              <CardDate className="card__date">{pinnedEvent.date}</CardDate>
              <h5 className="card__title">{pinnedEvent.title}</h5>
              <div className="card__description">{pinnedEvent.description}</div>
            </div>
          </HeadlineCard>
          <Events>
            {[...unpinnedEvent, pinnedEvent].map(event => {
              return (
                <EventCard key={event.id} onClick={() => setSelectedEventId(event.id)}>
                  <Img src={event.imgSrc}/>
                  <div className="card__content">
                    <CardDate className="card__date">{event.date}</CardDate>
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
          <Grid>
            <Stack spacing="8px">
              <img src={selectedEvent.imgSrc} width="100%" style={{ objectFit: 'cover' }} />
              <div>{selectedEvent.title}</div>
              <CardDate>{selectedEvent.date}</CardDate>
              <Stack direction="row" alignItems="center" spacing="16px">
                <div>分享</div>
                <IconButton alt="facebook" className="icon-facebook" src={facebookIcon} />
                <IconButton alt="instagram" className="icon-instagram" src={instagramIcon} />
                <IconButton alt="line" className="icon-line" src={lineIcon} />
                <IconButton alt="twitter" className="icon-twitter" src={twitterIcon} />
              </Stack>
            </Stack>
            <div>
              <Stack spacing="8px">
                <EventTitle>{selectedEvent.title}</EventTitle>
                <CardDate>{selectedEvent.date}</CardDate>
                <EventDescription>
                  {selectedEvent.description}
                </EventDescription>
                <MoreEventBlock>
                  <Stack spacing="16px">
                    <div className="more-event__title">更多活動</div>
                    <MoreEvents>
                      {unselectedEvents.map(event => (
                        <div key={event.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedEventId(event.id)}>
                          <img src={event.imgSrc} width="100%" />
                          <div>{event.title}</div>
                        </div>
                      ))}
                    </MoreEvents>
                  </Stack>
                </MoreEventBlock>
              </Stack>
            </div>
          </Grid>
        )}
        open={selectedEventId !== null}
        onClose={() => setSelectedEventId(null)}
      />
    </>
  );
};

export default LatestEvents;
