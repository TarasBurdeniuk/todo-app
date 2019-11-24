import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const NavBar = ({title}) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navBar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        backgroundColor: '#3949ab',
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default NavBar;