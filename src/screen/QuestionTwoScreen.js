import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth
} from 'react-native-responsive-dimensions';
import AppTextInput from '../component/AppTextInput';

const QuestionTwoScreen = () => {
    const [nth, setNth] = useState(null);
    const [list, setList] = useState([]);
    const numbers = [5408, 6604, 32158, 84984, 8774, 34871];

    useEffect(() => {
        setList(
            numbers.sort(function (a, b) {
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            })
        );
    }, []);

    const getSmallestNumber = () => {
        const index = nth - 1;
        return list[index] ? list[index] : 'Out of index';
    };

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewWrapper}>
                <Text style={styles.textTitle}>Smallest Number</Text>
                <Text style={styles.textContent}>[{numbers.toString()}]</Text>
                <Text style={styles.textContent}>
                    Return the Nth smallest number
                </Text>
                <AppTextInput
                    value={nth}
                    onChangeText={(value) =>
                        setNth(value.replace(/[^0-9]/g, ''))
                    }
                    placeholder={'Nth smallest number'}
                />
                {nth > 0 && (
                    <Text style={styles.textTotal}>{getSmallestNumber()}</Text>
                )}
            </View>
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
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        color: '#43B2EC'
    },
    textContent: {
        fontSize: responsiveFontSize(1.8),
        width: responsiveWidth(80),
        textAlign: 'center'
    },
    textTotal: {
        fontSize: responsiveFontSize(2)
    }
});

export default QuestionTwoScreen;
