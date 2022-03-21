import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth
} from 'react-native-responsive-dimensions';
import AppTextInput from '../component/AppTextInput';

const QuestionOneScreen = () => {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bmi, setBmi] = useState(0);
    const [bmiStatus, setBmiStatus] = useState('');

    useEffect(() => {
        calculateIBM();
    }, [weight, height]);

    const calculateIBM = () => {
        const validatedWeight = weight || 0;
        const validatedHeight = height || 0;
        const result =
            (validatedWeight / validatedHeight / validatedHeight) * 10000;

        if (isNaN(result)) {
            setBmiStatus('');
        } else {
            if (result < 18.5) {
                setBmiStatus('Underweight');
            } else if (result <= 18.5 && result >= 24.9) {
                setBmiStatus('Healthy Weight');
            } else if (result <= 25 && result >= 29.9) {
                setBmiStatus('Overweight');
            } else if (result > 29.9) {
                setBmiStatus('Obese');
            }
        }

        setBmi(result.toFixed(2));
    };

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewWrapper}>
                <Text style={styles.textTitle}>LOGIN HERE</Text>
                <Text style={styles.textContent}>
                    Calculating BMI Using the Metric System formula:
                </Text>
                <Text style={styles.textContent}>
                    [weight(kg) / height (cm) / height (cm)] x 10,000
                </Text>
                <AppTextInput
                    value={weight}
                    onChangeText={(value) =>
                        setWeight(value.replace(/[^0-9]/g, ''))
                    }
                    placeholder={'Input Weight in kg'}
                />
                <AppTextInput
                    value={height}
                    onChangeText={(value) =>
                        setHeight(value.replace(/[^0-9]/g, ''))
                    }
                    placeholder={'Input Height in cm'}
                />
                {bmi > 0 && (
                    <Text style={styles.textTotal}>
                        BMI : {bmi} ({bmiStatus})
                    </Text>
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
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: '#43B2EC'
    },
    textContent: {
        fontSize: responsiveFontSize(1.6),
        width: responsiveWidth(80),
        textAlign: 'center'
    },
    textTotal: {
        fontSize: responsiveFontSize(2)
    }
});

export default QuestionOneScreen;
