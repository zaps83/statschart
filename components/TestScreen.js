import * as React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
  } from 'react-native';

const TestScreen = ({ navigation }) => {
    return (
        <>
        <Text>test text</Text>
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Home', { name: 'Home' })
            }
            />
        </>
    )
}

export default TestScreen
