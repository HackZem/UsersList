import styled from "styled-components";

const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
    min-width: 43px;
    border-radius: 50px;
    padding: 0 5px;
    color: ${({ theme }) => theme?.color};
    background: #787657;
    border: 1px solid ${({ theme }) => theme?.background};

    :hover {
        background: ${({ theme }) => theme?.contrast?.background};
        color: ${({ theme }) => theme?.contrast?.color};
    }
    
    > svg {
        fill: ${({ theme }) => theme?.color};
        width: 20px;
        height: 20px;
    }
`;

export const Styles = {
    Container,
};
