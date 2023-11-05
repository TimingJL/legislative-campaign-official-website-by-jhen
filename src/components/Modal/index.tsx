import * as React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
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

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  padding: 0px var(--spacer-48, 48px);
  font-size: 32px;
  font-weight: 700;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 10;
  background: #FFF;
  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
    padding: 0px var(--spacer-16, 16px);
  }
`;

const Title = styled.div`
  line-height: 87px;
  @media ${props => props.theme.device.tablet} {
    line-height: 60px;
  }
`;

const ModalContent = styled.div`
  overflow-y: auto;
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
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
  }
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
      <HeaderBar className="dialog__header">
        <Title>{title}</Title>
        <CancelButton onClick={onClose}>
          <img src={Cancel} alt="cancel" />
        </CancelButton>
      </HeaderBar>
      <ModalContent className="modal__content">
        {content}
      </ModalContent>
    </Dialog>
  );
};

export default Modal;
