import styled from 'styled-components';

const randomColor = require('randomcolor');

export const Title = styled.h2`
    text-align: center;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Item = styled.li`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: ${p => p.theme.space[2]}px;
   background-color: ${randomColor};
   padding: ${p => p.theme.space[3]}px;
`;