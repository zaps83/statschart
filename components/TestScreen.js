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
            title="Go home"
            onPress={() =>
                navigation.navigate('Home', { name: 'Home' })
            }
            />
        <Button
            title="Go to stats"
            onPress={() =>
                navigation.navigate('Stats', { name: 'Stats' })
            }
            />
        </>
    )
}

export default TestScreen
