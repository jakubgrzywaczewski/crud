import styled from 'styled-components';

const FavouriteButton = styled.button.attrs((props) => ({
  type: 'button',
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
