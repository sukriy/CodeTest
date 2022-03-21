import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth
} from 'react-native-responsive-dimensions';

const AppTextInput = ({
    placeholder,
    secureTextEntry,
    value,
    onChangeText
}) => {
    return (
        <TextInput
            placeholder={placeholder || ''}
            style={styles.textInput}
            keyboardType='numeric'
            maxLength={10}
            secureTextEntry={secureTextEntry || false}
            onChangeText={onChangeText}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: responsiveHeight(2.33),
        paddingHorizontal: responsiveWidth(5)
    }
});

export default AppTextInput;
