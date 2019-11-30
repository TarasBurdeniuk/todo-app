import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({item}) => (
                <Todo
                    todo={item}
                    onRemove={removeTodo}
                    onOpen={openTodo}
                />
            )}
        />
    );

    if (!todos.length) {
        content = (
            <View style={styles.wrap}>
                <Image style={styles.image} source={require('../../assets/flag.png')}/>
            </View>
        )
    }
    return (
        <View>
            <AddTodo
                onSubmit={addTodo}
            />
            {content}
        </View>
    )
};

const styles = StyleSheet.create({
    wrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default MainScreen;