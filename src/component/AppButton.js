import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth
} from 'react-native-responsive-dimensions';

const AppButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.viewButton}>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewButton: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        alignItems: 'center',
        backgroundColor: '#43B2EC',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(1.1)
    },
    textTitle: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: responsiveFontSize(2.2)
    }
});

export default AppButton;
