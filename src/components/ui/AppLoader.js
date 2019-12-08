import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import THEME from '../../theme';

const AppLoader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default AppLoader;
