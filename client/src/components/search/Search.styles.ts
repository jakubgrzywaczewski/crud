import styled from 'styled-components';

const Button = styled.button`
  line-height: 1;
  pointer-events: auto;
  cursor: pointer;
  background-color: #6b6969;
  border: none;
  height: 2rem;
  padding: 8px;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  outline: none;
  color: white;
  margin-right: 5px;

  &:hover {
    background-color: #000;
  }
`;

const SerachWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ccc;
  width: 20rem;
  cursor: initial;
  height: 2rem;
  border-radius: 10rem;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  border: none;
  transition: margin 300ms cubic-bezier(0.6, 0.05, 0.4, 1);

  &:focus,
  &:active {
    outline: none;
    color: black;
  }
  &::placeholder {
    color: #aaa;
  }
`;

export { Button, Input, SerachWrapper };
