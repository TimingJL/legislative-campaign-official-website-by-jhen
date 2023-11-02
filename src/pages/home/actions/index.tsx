import styled from 'styled-components';
import Button from 'src/components/Button';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import Donate from 'src/assets/images/donate.png';
import { AnchorId } from 'src/config';

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

const CommonBox = styled.div`
  scroll-margin-top: 120px;
  border-radius: var(--spacer-32, 32px);
  padding: var(--spacer-96, 96px);
  color: var(--default-white, #FFF);
  .action__title {
    white-space: nowrap;
    font-family: Mantou Sans;
    font-size: 52px;
  }
  .action__description {
    font-size: 20px;
    font-weight: 600;
    min-height: 60px;
  }
  .action__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-end;
    gap: 24px;
  }
  .donate__img {
    width: 100%;
    object-fit: contain;
  }
  h6 {
    white-space: nowrap;
  }
  @media ${props => props.theme.device.desktop} {
    padding: var(--spacer-40, 40px) var(--spacer-24, 24px);
    .action__title {
      font-size: 40px;
    }
  }
`;

const DonateBox = styled(CommonBox)`
  background: var(--primary-color, #DA7D4A);
`;

const ServiceBox = styled(CommonBox)`
  background: var(--text-primary, #334155);
`;

const Actions = () => {
  return (
    <Section>
      <CenterBox>
        <CardsGroup>
          <DonateBox id={AnchorId.donate}>
            <div>
              <div className="action__title">小額支持喵喵</div>
              <div className="action__description">您的小筆捐款，是每隻毛孩未來的大大動力！</div>
            </div>
            <div className="action__content">
              <Button
                endIcon={<img src={ArrowForward} />}
              >
                <h6>小額捐款</h6>
              </Button>
              <img src={Donate} className="donate__img" />
            </div>
          </DonateBox>
          <ServiceBox id={AnchorId.service}>
            <div>
              <div className="action__title">民眾服務信箱</div>
              <div className="action__description">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>
            </div>
            <div className="action__content">
              <Button
                endIcon={<img src={ArrowForward} />}
              >
                <h6>填寫表單</h6>
              </Button>
              <img src={Donate} style={{ visibility: 'hidden' }} className="donate__img" />
            </div>
          </ServiceBox>
        </CardsGroup>
      </CenterBox>
    </Section>
  );
};

export default Actions;
