import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    & > button {
        margin-left: auto;
        margin-bottom: 15px;
    }
    .usersList {
        text-align: center;
    }
    .usersList label {
        display: block;
        position: relative;
        top: 80px;
        font-size: 1.3rem;
        color: ${({theme})=>theme.color};
        height: 1rem;
    }
`;

export const Styles = {
    Container,
};
