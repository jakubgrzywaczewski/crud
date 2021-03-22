import styled from 'styled-components';

const MovieWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

const FavouriteButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: 1px solid #61b50e;
  background-color: #649633;
  cursor: pointer;
  height: 50px;
  width: 250px;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 16px;

  &:hover {
    background-color: #61b50e;
  }
`;

export { FavouriteButton, MovieWrapper };
