import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #333;
`;

export const TitleInput = styled.TextInput`
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: #FFF;
`;

export const BodyInput = styled.TextInput`
    flex: 1;
    padding: 15px;
    font-size: 15px;
    color: #FFF;
`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 10px;
`;

export const SaveButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`;

export const CloseButton = styled.TouchableHighlight`
    margin-right: 25px;
`;

export const CloseButtonImage = styled.Image`
    width: 20px;
    height: 20px;
`;
