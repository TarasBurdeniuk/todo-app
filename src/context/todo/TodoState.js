import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
    ADD_TODO,
    CLEAR_ERROR,
    FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO,
} from '../types';
import ScreenContext from '../screen/screenContext';
import Http from '../../http';

const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null,
    };

    const { changeScreen } = useContext(ScreenContext);

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = async title => {
        try {
            const data = await Http.post(
                'https://react-native-todoapp-138b6.firebaseio.com/todos.json',
                { title },
            );

            dispatch({ type: ADD_TODO, title, id: data.name });
        } catch (err) {
            showError('Something went wrong.');
        }
    };

    const showLoader = () => dispatch({ type: SHOW_LOADER });

    const hideLoader = () => dispatch({ type: HIDE_LOADER });

    const showError = error => dispatch({ type: SHOW_ERROR, error });

    const clearError = () => dispatch({ type: CLEAR_ERROR });

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
                    onPress: async () => {
                        changeScreen(null);
                        await Http.delete(
                            `https://react-native-todoapp-138b6.firebaseio.com/todos/${id}.json`,
                        );

                        dispatch({ type: REMOVE_TODO, id });
                    },
                },
            ],
            { cancelebel: false },
        );
    };

    const fetchTodos = async () => {
        showLoader();
        clearError();
        try {
            const data = await Http.get(
                'https://react-native-todoapp-138b6.firebaseio.com/todos.json',
            );

            const todos = Object.keys(data).map(key => ({
                ...data[key],
                id: key,
            }));
            dispatch({
                type: FETCH_TODOS,
                todos,
            });
        } catch (err) {
            showError('Something went wrong. Try again!');
        } finally {
            hideLoader();
        }
    };

    const updateTodo = async (id, title) => {
        clearError();
        try {
            await Http.patch(`https://react-native-todoapp-138b6.firebaseio.com/todos/${id}.json`, {
                title,
            });
            dispatch({ type: UPDATE_TODO, id, title });
        } catch (err) {
            showError('Something went wrong. Try again!');
        }
    };

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                updateTodo,
                removeTodo,
                fetchTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoState;
