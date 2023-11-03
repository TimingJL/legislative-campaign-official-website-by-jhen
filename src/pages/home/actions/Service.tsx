import * as React from 'react';
import styled from 'styled-components';
import Button from 'src/components/Button';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import DonateSrc from 'src/assets/images/donate.png';
import { AnchorId } from 'src/config';
import { CommonBox } from './styled';

const ServiceBox = styled(CommonBox)`
  background: var(--text-primary, #334155);
`;

const Service = () => {
  return (
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
        <img src={DonateSrc} style={{ visibility: 'hidden' }} className="donate__img" />
      </div>
    </ServiceBox>
  );
};

export default Service;
