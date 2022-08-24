import styled from 'styled-components';

export const FriendListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: ${p => p.theme.space[2]}px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 2px;
    padding: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`;