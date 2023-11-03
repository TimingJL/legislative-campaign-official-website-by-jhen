import * as React from 'react';
import styled from 'styled-components';

import Button from 'src/components/Button';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import ServiceSrc from 'src/assets/images/service.png';
import DonateSrc from 'src/assets/images/donate.png';
import { AnchorId } from 'src/config';
import Modal from 'src/components/Modal';

import { CommonBox, Grid, ActionTitle, CommonColorBlock } from './styled';

const ServiceBox = styled(CommonBox)`
  background: var(--text-primary, #334155);
`;

const ColorBlock = styled(CommonColorBlock)`
  background: #E3F8FF;
  display: flex;
  flex-direction: column;
  position: relative;
  .img__container {
    height: 480px;
  }
  img {
    width: 731px;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    .img__container {
      height: 126px;
    }
    img {
      width: 177px;
    }
  }
`;

const Service = () => {
  const [open ,setOpen] = React.useState(false);
  return (
    <>
      <ServiceBox id={AnchorId.service}>
        <div>
          <div className="action__title">民眾服務信箱</div>
          <div className="action__description">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>
        </div>
        <div className="action__content">
          <Button
            endIcon={<img src={ArrowForward} />}
            onClick={() => setOpen(true)}
          >
            <h6>填寫表單</h6>
          </Button>
          <img src={DonateSrc} style={{ visibility: 'hidden' }} className="donate__img" />
        </div>
      </ServiceBox>
      <Modal
        open={open}
        title="民眾服務信箱"
        onClose={() => setOpen(false)}
        content={(
          <Grid>
            <ColorBlock>
              <ActionTitle>{'分享您的想法\n一同為我們的未來打造更美好！'}</ActionTitle>
              <div className="img__container">
                <img src={ServiceSrc} width="100%" />
              </div>
            </ColorBlock>
            <div>ServiceSrc</div>
          </Grid>
        )}
      />
    </>
  );
};

export default Service;
