import styled from "styled-components";

export const MovieInformation = styled.div`

  text-align: left;
  padding: 2rem;
  display: flex;
  background: #F0F1F5;
  border-radius: 10px;
  margin: 2rem;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 665px) {
    flex-direction: column;
  }
  
`;
