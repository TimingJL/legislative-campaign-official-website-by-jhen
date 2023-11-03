import * as React from 'react';
import styled from 'styled-components';
import Button from 'src/components/Button';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import DonateSrc from 'src/assets/images/donate.png';
import { AnchorId } from 'src/config';
import { CommonBox } from './styled';

const DonateBox = styled(CommonBox)`
  background: var(--primary-color, #DA7D4A);
`;

const Donate = () => {
  return (
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
        <img src={DonateSrc} className="donate__img" />
      </div>
    </DonateBox>
  );
};

export default Donate;
