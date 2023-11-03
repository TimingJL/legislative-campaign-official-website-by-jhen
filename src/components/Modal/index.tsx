import * as React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import useMediaQuery from '@mui/material/useMediaQuery';

import Cancel from 'src/assets/icons/cancel.svg';
import { device } from 'src/theme/breakpoints';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HeaderBar = styled(Stack)`
  max-width: 1400px;
  height: 87px;
  padding: 0px var(--spacer-48, 48px);
  font-size: 24px;
  font-weight: 700;
  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
    height: 60px;
    padding: 0px var(--spacer-16, 16px);
  }
`;

const ModalContent = styled.div`
  padding: var(--spacer-8, 8px) var(--spacer-48, 48px) var(--spacer-48, 48px) var(--spacer-48, 48px);
  @media ${props => props.theme.device.tablet} {
    padding: var(--spacer-8, 8px) var(--spacer-16, 16px) var(--spacer-16, 16px) var(--spacer-16, 16px);
  }
`;

const CancelButton = styled.button`
  margin: 0px;
  padding: 0px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  @media ${props => props.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

interface IProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

const Modal = (props: IProps) => {
  const {
    open ,title, content, onClose,
  } = props;
  const matches = useMediaQuery(device.tablet);

  return (
    <Dialog
      {...matches ? {
        fullScreen: true,
        TransitionComponent: Transition,
      }: {}}
      fullWidth
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "24px",
          maxWidth: '1400px', width: '100%',
        },
      }}
    >
      <HeaderBar direction="row" alignItems="center" justifyContent="space-between">
        <div>{title}</div>
        <CancelButton onClick={onClose}>
          <img src={Cancel} alt="cancel" />
        </CancelButton>
      </HeaderBar>
      <ModalContent>
        {content}
      </ModalContent>
    </Dialog>
  );
};

export default Modal;
