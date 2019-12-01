import React, {useState, useContext} from 'react';
import {View, StyleSheet, Alert} from "react-native";
import NavBar from "./components/NavBar";
import {THEME} from "./theme";
import MainScreen from "./Screens/MainScreen";
import TodoScreen from "./Screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";

const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext);
    const [todoId, setTodoId] = useState(null);
    // const [todos, setTodos] = useState([]);

    // const addTodo = (title) => {
    //     setTodos(prev => [...prev, {
    //         id: Date.now().toString(),
    //         title,
    //     }])
    // };

    // const removeTodo = (id) => {
    //     const todo = todos.find(item => item.id === id);
    //     Alert.alert(
    //         'Removing element',
    //         `Are you sure remove "${todo.title}"?`,
    //         [
    //             {
    //                 text: 'Cancel',
    //                 style: 'cancel',
    //             },
    //             {
    //                 text: 'OK',
    //                 onPress: () => {
    //                     setTodoId(null);
    //                     setTodos(prev => prev.filter(item => item.id !== id))
    //                 },
    //             },
    //         ],
    //         {cancelable: false},
    //     );
    // };

    // const updateTodo = (id, title) => {
    //     setTodos(old => old.map(todo => {
    //         if (todo.id === id) {
    //             todo.title = title;
    //         }
    //         return todo;
    //     }))
    // };

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
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
    },
});

export default MainLayout;