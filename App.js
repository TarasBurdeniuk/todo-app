import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import NavBar from "./src/components/NavBar";
import MainScreen from "./src/Screens/MainScreen";
import TodoScreen from "./src/Screens/TodoScreen";
import {THEME} from "./src/theme";

const loadApplication = async () => {
    try {
        await Font.loadAsync({
            'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        })
    } catch {
        Alert.alert('Fonts', 'Do not download fonts');
    }
};

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }])
    };

    const removeTodo = (id) => {
        const todo = todos.find(item => item.id === id);
        Alert.alert(
            'Removing element',
            `Are you sure remove "${todo.title}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(item => item.id !== id))
                    },
                },
            ],
            {cancelable: false},
        );
    };

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        }))
    };

    let content = (
        <MainScreen
            removeTodo={removeTodo}
            todos={todos}
            addTodo={addTodo}
            openTodo={setTodoId}
        />
    );

    if (todoId) {
        const selectedTodo = todos.find(item => item.id === todoId);
        content = <TodoScreen
            onRemove={removeTodo}
            goBack={() => setTodoId(null)}
            todo={selectedTodo}
            onSave={updateTodo}
        />
    }

    return (
        <View>
            <NavBar
                title='Todo App'
            />
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
    },
});
