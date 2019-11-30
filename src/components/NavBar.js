import React from 'react';
import {View, StyleSheet} from "react-native";
import {THEME} from '../theme';
import AppTextBold from "./ui/AppTextBold";

const NavBar = ({title}) => {
    return (
        <View style={styles.navBar}>
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
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default NavBar;