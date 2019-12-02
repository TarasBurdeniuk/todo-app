import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import THEME from './theme';
import MainScreen from './Screens/MainScreen';
import TodoScreen from './Screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';

const MainLayout = () => {
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
    const [todoId, setTodoId] = useState(null);

    let content = (
        <MainScreen removeTodo={removeTodo} todos={todos} addTodo={addTodo} openTodo={setTodoId} />
    );

    if (todoId) {
        const selectedTodo = todos.find(item => item.id === todoId);
        content = (
            <TodoScreen
                onRemove={removeTodo}
                goBack={() => setTodoId(null)}
                todo={selectedTodo}
                onSave={updateTodo}
            />
        );
    }

    return (
        <View>
            <NavBar title="Todo App" />
            <View style={styles.container}>{content}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
    },
});

export default MainLayout;
