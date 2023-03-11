import styled from "styled-components";

const Container = styled.div`
display: flex;
border-bottom: 1px solid ${({ theme }) => theme.borderColor};
margin-bottom: 30px;

.container {
    display: flex;
    align-items: center;
    height: 80px;
    h1 {
        position: relative;
        color: ${({ theme }) => theme.color};
        font-size: 2rem;
        flex: 1;
        transform: translate(47%) 
    }

    & > button {
        margin-right: 15px;
    }
}
`;

export const Styles = {
    Container,
};