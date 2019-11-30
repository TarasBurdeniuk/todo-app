import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Keyboard, Alert} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {THEME} from "../theme";

const AppTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handlerPress = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            setValue('');
            Alert.alert('Todo is must be fill')
        }

    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Enter text'
                autoCorrect={false}
                autoCapitalize='words'
            />
            <AntDesign.Button onPress={handlerPress} name='pluscircleo'>
                Add
            </AntDesign.Button>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '60%',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
    },
});

export default AppTodo;