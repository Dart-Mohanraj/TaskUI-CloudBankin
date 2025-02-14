import { styled } from 'styled-components';
import backgroundImage from '../../../src/assets/backgroudFullLayout.jpg';

export const WrapSetUpPage = styled.div`
    overflow-x: hidden;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

export const WrapContainer = styled.div`
    overflow-x: hidden;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0em 3em;
    height: 55%;
    width: 85%;
    margin-top: 1em;
`;

export const SubWrapContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const StepsContent = styled.div`
    padding: 2em 6em 0 6.4em;
    @media screen and (max-width: 700px) {
        padding: 2em 3em 0 3.4em;
    }
`;
