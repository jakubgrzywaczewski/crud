import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 3rem);
`;

const LoginButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  border: 1px solid #4285f0;
  background-color: #4285f4;
  cursor: pointer;
  height: 75px;
  width: 250px;
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    background-color: #124fb0;
  }
`;

export { LoginButton, LoginPageWrapper };
