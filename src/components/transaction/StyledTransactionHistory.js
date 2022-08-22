import styled from 'styled-components';

export const TransactionData = styled.tbody`
    tr:nth-child(odd) {
        background-color: ${p => p.theme.colors.muted};
  }
`;