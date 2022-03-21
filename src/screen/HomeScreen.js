import React from 'react';
import { Button, Text, View } from 'react-native';
import route from '../constant/route';

const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <Text>Home Screen</Text>
            <Button
                title='Calculate BMI'
                onPress={() => navigation.navigate(route.questionOne)}
            />
            <Button
                title='Smallest Number'
                onPress={() => navigation.navigate(route.questionTwo)}
            />
        </View>
    );
};
export default HomeScreen;
