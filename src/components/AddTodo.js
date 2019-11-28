import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {THEME} from "../theme";

const AppTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handlerPress = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
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
            <Button
                title='Add'
                onPress={handlerPress}
            />
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
        width: '70%',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
    }
});

export default AppTodo;