import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 1rem;
  margin: 10px;
  grid-row-gap: 1rem;

  @media (min-width: 1025px) and (max-width: 1280px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 581px) and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;