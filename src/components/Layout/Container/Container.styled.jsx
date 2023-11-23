import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 16px;
  }
`;