import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppCard = ({ style, children }) => (
    <View style={{ ...styles.default, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
    default: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
    },
});

export default AppCard;
