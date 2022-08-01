import React from "react";
import { Box, Title } from './styles';

export default (props) => {
    return (
        <Box onPress={() => props.onPress(props.index)}>
            <Title>{props.data.title}</Title>
        </Box>
    );
}