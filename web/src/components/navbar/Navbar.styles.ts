import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  height: 2em;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-weight: bold;
    margin-right: 15px;
    cursor: pointer;
    background-color: #ccc;

    &:hover {
      a {
        text-decoration: underline;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default StyledNavbar;
