import styled from 'styled-components';

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${p => p.theme.colors.white};
`;

export const Avatar = styled.img`
    width: 180px;
    height: 180px;
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
    background-color: ${p => p.theme.colors.background};
`;

export const Stats = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${p => p.theme.colors.muted};
    margin-top: ${p => p.theme.space[4]}px;
`;