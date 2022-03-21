import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AppButton from '../component/AppButton';
import route from '../constant/route';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewWrapper}>
                <Text style={styles.textTitle}>Code Test</Text>
            </View>
            <AppButton
                onPress={() => navigation.navigate(route.questionOne)}
                title='Question 1'
            />
            <AppButton
                onPress={() => navigation.navigate(route.questionTwo)}
                title='Question 2'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    viewWrapper: {
        alignItems: 'center'
    },
    textTitle: {
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        color: '#43B2EC'
    }
});

export default HomeScreen;
