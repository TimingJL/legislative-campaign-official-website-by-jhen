import React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Textarea from 'src/components/Textarea';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import ServiceHalfxSrc from 'src/assets/images/service_halfx.png';
import Service1xSrc from 'src/assets/images/service_1x.png';
import Service2xSrc from 'src/assets/images/service_2x.png';
import DonateSrc from 'src/assets/images/donate.png';
import { anchorId } from 'src/config/anchor';
import Modal from 'src/components/Modal';
import { aosProps } from 'src/utils/aos';
import { size } from 'src/theme/breakpoints'

import SuccessTab from './SuccessTab';
import { CommonBox, Grid, ActionTitle, CommonColorBlock, SubmitButton } from './styled';

const ServiceBox = styled(CommonBox)`
  background: var(--text-primary, #334155);
`;

const ColorBlock = styled(CommonColorBlock)`
  background: #E3F8FF;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
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

const InputLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

const Service = () => {
  const [open ,setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('idle');
  const isLoading = status === 'loading';

  const handleOnClose = () => {
    setOpen(false);
    setStatus('idle');
  };

  const handleOnSubmit = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };
  return (
    <>
      <ServiceBox id={anchorId.service} {...aosProps({ order: 0, animation: 'fade-left' })}>
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
                <picture>
                  <source srcSet={Service2xSrc} media={`(min-width:${size.desktop}px)`} />
                  <source srcSet={Service1xSrc} media={`(min-width:${size.tablet}px)`} />
                  <source srcSet={ServiceHalfxSrc} media={`(min-width:${size.mobile}px)`} />
                  <img src={Service1xSrc} alt="service" width="100%" style={{ objectFit: 'cover' }} />
                </picture>
              </div>
            </ColorBlock>
            {status !== 'success' && (
              <form onSubmit={handleOnSubmit}>
                <Stack spacing="24px">
                  <Stack spacing="8px">
                    <InputLabel>您的姓名</InputLabel>
                    <Input placeholder="輸入內容" required />
                  </Stack>
                  <Stack spacing="8px">
                    <InputLabel>Email</InputLabel>
                    <Input placeholder="email" type="email" required />
                  </Stack>
                  <Stack spacing="8px">
                    <InputLabel>手機</InputLabel>
                    <Input placeholder="手機號碼" required />
                  </Stack>
                  <Stack spacing="8px">
                    <InputLabel>您的建言</InputLabel>
                    <Textarea
                      required
                      rows={5}
                      placeholder="輸入內容"
                      style={{ height: '176px' }}
                    />
                  </Stack>
                  <SubmitButton
                    disabled={isLoading}
                    type="submit"
                  >
                    {!isLoading && '送出意見'}
                    {isLoading && <CircularProgress style={{ color: '#94A3B8', marginLeft: '8px' }} size={24} />}
                  </SubmitButton>
                </Stack>
              </form>
            )}
            {status === 'success' && (
              <SuccessTab
                message="感謝您的意見"
                onClose={handleOnClose}
              />
            )}
          </Grid>
        )}
      />
    </>
  );
};

export default Service;
