import React from 'react';
import {AntDesign} from "@expo/vector-icons";
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import AppTextBold from "./AppTextBold";
import {THEME} from "../../theme";

const AppButton = ({children, onPress, color = THEME.MAIN_COLOR}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

export default AppButton;