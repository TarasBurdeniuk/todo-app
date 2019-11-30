import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {THEME} from '../theme';
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";
import AppTextBold from "../components/ui/AppTextBold";

const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    };

    return (
        <View>
            <EditModal
                visible={modal}
                onCancel={() => setModal(false)}
                value={todo.title}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <Button title='Edit' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='return' onPress={goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button
                        title='remove'
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)}
                    />
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