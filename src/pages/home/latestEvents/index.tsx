import styled from 'styled-components';

import SectionTitle from 'src/components/SectionTitle';
import catFirst from 'src/assets/images/event-cat-first.png';
import model from 'src/assets/images/event-model.png';
import street from 'src/assets/images/event-street.png';
import { AnchorId } from 'src/config';

const events = [
  {
    pin: true,
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    description: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    imgSrc: catFirst,
    date: "2023/12/26",
  },
  {
    pin: false,
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    description: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
    imgSrc: street,
    date: "2023/12/24"
  },
  {
    pin: false,
    title: "收容所模特兒大比拼！",
    description: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    imgSrc: model,
    date: "2023/12/20"
  },
];

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
  const pinnedEvent = events.find(event => event.pin) || events[0];
  const unpinnedEvent = events.filter(event => !event.pin);
  return (
    <Section id={AnchorId.latestEvents}>
      <SectionTitle
        tag="LATEST EVENTS"
        title="最新活動"
      />
      <CenterBox>
        <HeadlineCard>
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
              <EventCard key={event.title}>
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
  );
};

export default LatestEvents;