import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import THEME from './theme';
import MainScreen from './Screens/MainScreen';
import TodoScreen from './Screens/TodoScreen';
import ScreenContext from './context/screen/screenContext';

const MainLayout = () => {
    const { todoId } = useContext(ScreenContext);

    return (
        <View>
            <NavBar title="Todo App" />
            <View style={styles.container}>{todoId ? <TodoScreen /> : <MainScreen />}</View>
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
