import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from "./src/components/NavBar";
import MainScreen from "./src/Screens/MainScreen";
import TodoScreen from "./src/Screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }])
    };


    const removeTodo = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id))
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
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
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
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});
