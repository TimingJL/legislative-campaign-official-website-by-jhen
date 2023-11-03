import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';

import Button from 'src/components/Button';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import DonateSrc from 'src/assets/images/donate.png';
import { AnchorId } from 'src/config';
import Modal from 'src/components/Modal';

import { CommonBox, Grid, ActionTitle, CommonColorBlock } from './styled';

const DonateBox = styled(CommonBox)`
  background: var(--primary-color, #DA7D4A);
`;

const Title = styled(ActionTitle)`
  color: var(--primary-color, #DA7D4A);
`;

const ColorBlock = styled(CommonColorBlock)`
  background: var(--bg-2, #F7ECE1);
  display: flex;
  flex-direction: column;
  .img__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 56px;
  }
  img {
    max-width: 336px;
  }
  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 95px;
    }
    .img__container {
      margin: 0px;
    }
  }
`;

const Amount = styled.div`
  font-size: 32px;
  font-weight: 700;
  @media ${props => props.theme.device.tablet} {
    font-size: 20px;
  }
`;

const Donate = () => {
  const [open ,setOpen] = React.useState(false);
  return (
    <>
      <DonateBox id={AnchorId.donate}>
        <div>
          <div className="action__title">小額支持喵喵</div>
          <div className="action__description">您的小筆捐款，是每隻毛孩未來的大大動力！</div>
        </div>
        <div className="action__content">
          <Button
            endIcon={<img src={ArrowForward} />}
            onClick={() => setOpen(true)}
          >
            <h6>小額捐款</h6>
          </Button>
          <img src={DonateSrc} className="donate__img" />
        </div>
      </DonateBox>
      <Modal
        open={open}
        title="小額捐款"
        onClose={() => setOpen(false)}
        content={(
          <Grid>
            <ColorBlock>
              <div>
                <Title>
                  {'您的小筆捐款\n'}
                  <span style={{ whiteSpace: 'nowrap' }}>是每隻毛孩未來的大大動力！</span>
                </Title>
                <Stack sx={{ mt: '16px' }}>
                  <div>目前小額贊助總金額</div>
                  <Amount>987,655,873</Amount>
                </Stack>
              </div>
              <div className="img__container">
                <img src={DonateSrc} width="100%" />
              </div>
            </ColorBlock>
            <div>donate</div>
          </Grid>
        )}
      />
    </>
  );
};

export default Donate;
