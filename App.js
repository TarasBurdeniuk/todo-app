import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainLayout from './src/MainLayout';
import TodoState from './src/context/todo/TodoState';

const loadApplication = async () => {
    try {
        await Font.loadAsync({
            'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
    } catch {
        Alert.alert('Fonts', 'Do not download fonts');
    }
};

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onError={(title, message) => Alert.alert('error in App.js', message)}
                onFinish={() => setIsReady(true)}
            />
        );
    }

    return (
        <TodoState>
            <MainLayout />
        </TodoState>
    );
}
