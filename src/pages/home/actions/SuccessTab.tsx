import Stack from '@mui/material/Stack';
import styled from 'styled-components';

import SuccessSrc from 'src/assets/images/success.png';
import Button from 'src/components/Button';

const Container = styled.div`
  padding: 200px 0px;
  @media ${props => props.theme.device.tablet} {
    padding: 100px 0px;
  }
`;

const Message = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const CloseButton = styled(Button)`
  width: 224px;
  height: 51px;
  font-weight: 600;
  font-size: 16px;
`;

interface IProps {
  message: string;
  onClose: () => void;
}

const SuccessTab = (props: IProps) => {
  const { message, onClose } = props;
  return (
    <Container>
      <Stack alignItems="center" spacing="32px">
        <Message>{message}</Message>
        <img src={SuccessSrc} alt="success" width="187px" />
        <CloseButton onClick={onClose}>關閉</CloseButton>
      </Stack>
    </Container>
  );
};

export default SuccessTab;
