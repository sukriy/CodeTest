import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import route from './constant/route';
import HomeScreen from './screen/HomeScreen';
import QuestionOneScreen from './screen/QuestionOneScreen';
import QuestionTwoScreen from './screen/QuestionTwoScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={route.home} component={HomeScreen} />
                <Stack.Screen
                    name={route.questionOne}
                    component={QuestionOneScreen}
                />
                <Stack.Screen
                    name={route.questionTwo}
                    component={QuestionTwoScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
