import styled from 'styled-components';

const Button = styled.button`
  line-height: 1;
  pointer-events: auto;
  cursor: pointer;
  background-color: #999;
  border: none;
  height: 2rem;
  padding: 10px;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  outline: none;
  color: white;

  &:hover {
    background-color: #000;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ccc;
  width: 20rem;
  cursor: initial;
  padding: 10px;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.6, 0.05, 0.4, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export { Button, Form, Input };
