import * as React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import Button from 'src/components/Button';
import ArrowForward from 'src/assets/icons/arrow-forward.svg';
import DonateSrc from 'src/assets/images/donate.png';
import { anchorId } from 'src/config/anchor';
import Modal from 'src/components/Modal';
import Input from 'src/components/Input';
import { aosProps } from 'src/utils/aos';

import SuccessTab from './SuccessTab';
import { CommonBox, Grid, ActionTitle, CommonColorBlock, SubmitButton } from './styled';
import { donatePlans } from './data';

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

const DonationPlan = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const PlanOptionBox = styled.div<{ $selected: boolean; }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-radius: var(--spacer-16, 16px);
  padding: var(--spacer-24, 24px) var(--spacer-16, 16px);
  border: 2px solid var(--gray-200, #E2E8F0);
  cursor: pointer;
  &:hover, &:focus {
    border: 2px solid var(--primary, #DA7D4A);
  }
  ${props => props.$selected && `
    border: 2px solid var(--primary, #DA7D4A);
  `}
  .plan-option-box__title {
    color: var(--primary, #DA7D4A);
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    margin-right: 8px;
  }
  .plan-option-box__info {
    display: flex;
    align-items: center;
  }
  .plan-option-box__info-price {
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
  }
  .plan-option-box__info-headcount {
    margin-left: 24px;
    color: var(--slate-500, #94A3B8);
    white-space: nowrap;
  }
  .plan-option-box__info-input {
    border-radius: var(--spacer-8, 8px);
    background: var(--slate-100, #F1F5F9);
    padding: var(--spacer-16, 16px) 15px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center
  }
  .plan-option-box__info-input-box {
    margin-left: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    width: 100%;
    background: transparent;
  }
  @media ${props => props.theme.device.desktop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    .plan-option-box__info {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const CustomPlanOptionBox = styled(PlanOptionBox)`
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Donate = () => {
  const [open ,setOpen] = React.useState(false);
  const [selectedOptionId, setSelectedOptionId] = React.useState<number | null>(null);
  const [amount, setAmount] = React.useState(987655873);
  const [customPrice, setCustomPrice] = React.useState(0);
  const [status, setStatus] = React.useState('idle');
  const isLoading = status === 'loading';

  const handleOnClose = () => {
    setOpen(false);
    setStatus('idle');
    setSelectedOptionId(null);
    setCustomPrice(0);
  };

  const handleOnSubmit = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };
  return (
    <>
      <DonateBox id={anchorId.donate} {...aosProps({ order: 0, animation: 'fade-right' })}>
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
          <div className="box__img-container"><img src={DonateSrc} className="box__img" /></div>
        </div>
      </DonateBox>
      <Modal
        open={open}
        title="小額捐款"
        onClose={handleOnClose}
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
                  <Amount>
                    {/* {amount.toLocaleString()} */}
                    <CountUp end={amount} />
                  </Amount>
                </Stack>
              </div>
              <div className="img__container">
                <img src={DonateSrc} width="100%" />
              </div>
            </ColorBlock>
            {status !== 'success' && (
              <Stack spacing="16px">
                <DonationPlan>捐款方案</DonationPlan>
                <Stack spacing="16px">
                  {donatePlans.map((plan) => (
                    <PlanOptionBox
                      key={plan.id}
                      $selected={selectedOptionId === plan.id}
                      onClick={() => {
                        setSelectedOptionId(plan.id);
                        setCustomPrice(0);
                      }}
                    >
                      <div className="plan-option-box__title">{plan.title}</div>
                      <div className="plan-option-box__info">
                        <Stack direction="row" alignItems="center">
                          NT$<span className="plan-option-box__info-price">{plan.price}</span>
                        </Stack>
                        <div className="plan-option-box__info-headcount">{`已有 ${plan.headcount.toLocaleString()} 人贊助`}</div>
                      </div>
                    </PlanOptionBox>
                  ))}
                  <CustomPlanOptionBox
                    $selected={selectedOptionId === donatePlans.length}
                    onClick={() => setSelectedOptionId(donatePlans.length)}
                  >
                    <div className="plan-option-box__title">自訂贊助金額</div>
                    <Input
                      type="number"
                      startAdornment="NT$"
                      placeholder="輸入金額"
                      value={customPrice}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCustomPrice(Number(event.target.value))}
                    />
                  </CustomPlanOptionBox>
                </Stack>
                <SubmitButton
                  disabled={
                    selectedOptionId === null ||
                    (selectedOptionId === donatePlans.length && customPrice === 0) || 
                    isLoading
                  }
                  onClick={() => {
                    setAmount(amount + 1);
                    handleOnSubmit();
                  }}
                >
                  {!isLoading && '前往捐款'}
                  {isLoading && <CircularProgress style={{ color: '#94A3B8', marginLeft: '8px' }} size={24} />}
                </SubmitButton>
              </Stack>
            )}
            {status === 'success' && (
              <SuccessTab
                message="感謝您的捐款"
                onClose={handleOnClose}
              />
            )}
          </Grid>
        )}
      />
    </>
  );
};

export default Donate;
