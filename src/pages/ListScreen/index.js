import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import {
    Container,
    AddButton,
    AddButtonImage,
    NotesList,
    NoNotes,
    NoNotesImage,
    NoNotesText
} from './styles';

import NoteItem from "../../components/NoteItem";

export default (props) => {
    const navigation = useNavigation();
    const list = useSelector(state => state.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas notas',
            headerRight: () => {
                return (
                    //Essa função OnPress encaminha para a página EditNote não passando
                    //Nenhuma parâmetro, ou seja, é uma nova nota inserida
                    <AddButton underlayColor="transparent" onPress={() => navigation.navigate('EditNote')}>
                        <AddButtonImage source={require('../../assets/more.png')} />
                    </AddButton>
                );
            }
        });
    }, []);

    //Essa função recebe um parâmetro e envia pra Tela EditNote que recebe o 
    //parâmetro e usamos pra editar uma nota
    const handleNotePress = (index) => {
        navigation.navigate('EditNote', {
            key: index
        });
    }

    return (
        <Container>
            {list.length > 0 &&
                <NotesList
                    data={list}
                    renderItem={({ item, index }) => {
                        return (
                            <NoteItem
                                data={item}
                                index={index}
                                onPress={handleNotePress}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            }
            {list.length == 0 && 
                <NoNotes>
                    <NoNotesImage source={require('../../assets/note.png')} />
                    <NoNotesText>Nenhuma anotação</NoNotesText>
                </NoNotes>
            }
        </Container>
    );
}