import React from 'react';
import {View, StyleSheet, Platform} from "react-native";
import {THEME} from '../theme';
import AppTextBold from "./ui/AppTextBold";

const NavBar = ({title}) => {
    return (
        <View style={{
            ...styles.navBar, ...Platform.select({
                ios: styles.navBarIos,
                android: styles.navBarAndroid,
            })
        }}>
            <AppTextBold style={styles.text}>
                {title}
            </AppTextBold>
        </View>
    )
};

const styles = StyleSheet.create({
    navBar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        paddingBottom: 10,
    },
    navBarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navBarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20,
    }
});

export default NavBar;