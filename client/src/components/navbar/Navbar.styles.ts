import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);

  a {
    text-decoration: none;
    color: inherit;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 1.75rem;
      font-weight: bold;
      margin-right: 15px;
      cursor: pointer;
      background-color: #ccc;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LogoutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 1.75rem;
  font-weight: bold;
  margin-right: 15px;
  cursor: pointer;
  background-color: #ccc;
`;

export { LogoutButton, StyledNavbar };
