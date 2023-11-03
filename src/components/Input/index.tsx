import { HTMLProps } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--spacer-8, 8px);
  background: var(--slate-100, #F1F5F9);
  padding: var(--spacer-16, 16px) 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .input__start-adornment {
    margin-right: 10px;
    &:empty {
      display: none;
      margin: 0px;
    }
  }
  input {
    font-size: 18px;
    outline: none;
    border: none;
    width: 100%;
    background: transparent;
  }
`;

interface IProps extends HTMLProps<HTMLInputElement> {
  startAdornment?: React.ReactNode | string;
}

const Input = (props: IProps) => {
  const { startAdornment, ...otherProps } = props;
  return (
    <Container>
      <div className="input__start-adornment">{startAdornment}</div>
      <input {...otherProps} />
    </Container>
  );
};

export default Input;
