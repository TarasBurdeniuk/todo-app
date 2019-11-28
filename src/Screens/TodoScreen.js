import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {THEME} from '../theme';
import AppCard from "../components/ui/AppCard";

const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' onPress={() => console.log('press')}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='return' onPress={goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title='remove' color={THEME.DANGER_COLOR} onPress={() => console.log('to remove')}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
    },
    card: {
        padding: 15,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
    },
});

export default TodoScreen;