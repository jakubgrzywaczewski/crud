import styled from 'styled-components';

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: '. .';
  gap: 0px 10px;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: '.';
    gap: 10px 10px;
  }
`;

export default PageWrapper;
