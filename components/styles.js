import styled, {createGlobalStyle} from 'styled-components';
import { View } from 'react-native';

import { Dimensions } from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const heightField = 70;

export const Colors = {
    primary: "#6C4DE6",
    titles: "#EEE",
    subtitles: "#8C9093",
    text: "#FFFFFF",
    background: "#111111",
    card: "#191D20",
    placeholder: "#4E5356"
}

const theme = {
    colors: {
        primary: "#6C4DE6",
        titles: "#CCCCCC",
        subtitles: "#8C9093",
        text: "#FFFFFF",
        background: "#111111",
        card: "#191D20",
        placeholder: "#4E5356"
    },
}

const {primary, titles, subtitles, text, background, card, placeholder} = Colors;

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: sans-serif;
        font-size: 18pt;
    }
`

export const StyledContainer = styled.div`
    flex: 1;
    padding: 25px;
    background-color: ${background}
`

export const Titles = styled.h1`
    color: ${titles};
    text-align: center;
`

export const Input = styled.input`
    width: ${windowWidth/1.3}px;
    background-color: ${card};
    border: none;
    border-radius: 20px;
    height: ${heightField}px;
    margin: 15px auto;
    padding: 0px 20px;
    box-shadow: 0 0 1em rgba(108, 77, 230, .10);
    color: ${text};
    &:focus-visible{
        outline: none;
    }
    &::placeholder{
        color: ${placeholder};
        font-weight: 700;
    }
    font-weight: 700;
`;

export const ButtonSubmit = styled.button`
    background-color: ${primary};
    border: none;
    border-radius: 50px;
    height: ${heightField}px;
    width: ${windowWidth/1.4}px;
    box-shadow: 0 0 1em rgba(108, 77, 230, .10);
    color: ${text};
    font-weight: 700;
    position: fixed;
    bottom: 20px;
`

export const FormStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InputErrorMessage = styled.p`
    color: #E73737;
    margin: 0px;
    font-weight: 100;
    font-size: 10pt;
    align-self: flex-end;
`