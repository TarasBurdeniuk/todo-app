import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import ScreenContext from '../screen/screenContext';

const TodoState = ({ children }) => {
    const initialState = {
        todos: [{ id: 4, title: 'some title' }],
    };

    const { changeScreen } = useContext(ScreenContext);

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = title => dispatch({ type: ADD_TODO, title });

    const removeTodo = id => {
        Alert.alert(
            'Remove todo',
            'Are you sure to remove todo?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null);
                        dispatch({ type: REMOVE_TODO, id });
                    },
                },
            ],
            { cancelebel: false },
        );
    };

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                updateTodo,
                removeTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoState;
