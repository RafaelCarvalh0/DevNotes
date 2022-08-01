import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { 
    Container,
    TitleInput,
    BodyInput,
    SaveButton,
    SaveButtonImage,
    CloseButton, CloseButtonImage
 } from './styles'

 export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');

    useEffect(() => {
        if(route.params?.key != undefined && list[ route.params.key ]) {
            setStatus('edit');
            setTitle( list[route.params.key].title );
            setBody( list[route.params.key].body );
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'Nova Anotação' : 'Editar Anotação',
            headerLeft: () => {
                return (
                    <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
                        <CloseButtonImage source={require('../../assets/close.png')} />
                    </CloseButton>
                );
            },
            headerRight: () => {
                return (
                <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
                    <SaveButtonImage source={require('../../assets/save.png')} />
                </SaveButton>
                );
            }
        });
    }, [status, title, body]);

    const handleCloseButton = () => {
        navigation.goBack();
    }

    

    const handleSaveButton = () => {
        if(title != '' && body != ''){
            if(status == 'edit') {

            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload: {
                        title: title,
                        body: body
                    }
                });
            }

        } else{
            alert('Preencha título e corpo');
        }
    }

    return (
        <Container>
            <TitleInput 
                defaultValue={title} //defaultValue para permitir digitarmos
                onchangeText={texto => setTitle(texto)}
                placeholder="Digite o título da anotação"
                placeholderTextColor="#CCC"
                autoFocus={true}
            />
            <BodyInput
                defaultValue={body} //defaultValue para permitir digitarmos
                onchangeText={texto => setBody(texto)}
                placeholder="Digite o corpo da anotação"
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
            />
        </Container>
    );
 }