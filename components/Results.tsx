import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    StyleSheet,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ResultsType {
    numCorrect: number,
    totalNum: number,
    results: any
}

export const Results = ({ route }: any) => {

    const navigation: any = useNavigation();

    const props: ResultsType = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.resultsView}>
                <View style={styles.scoreBox}>
                    <Text style={styles.label}>
                        You Scored
                    </Text>
                    <Text style={styles.label}>
                        {props.numCorrect}/{props.totalNum}
                    </Text>
                </View>
                {props.results.map((result: any, i: number) => (
                    <View key={i}>
                    {result.correct ?
                        <Text style={styles.correct} >
                            + {result.question}
                        </Text>
                    :
                        <Text style={styles.incorrect}>
                            - {result.question}
                        </Text>
                    }
                    </View>
                ))}
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=>navigation.navigate('Intro')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Play Again?
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultsView: {
        padding: 10
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scoreBox: {
        alignItems: 'center',
        marginBottom: 20
    },
    correct: {
        color: 'green',
        fontSize: 20,
        marginBottom: 20
    },
    incorrect: {
        color: 'red',
        fontSize: 20,
        marginBottom: 20
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        height: 75,
        width: 300,
        backgroundColor: 'black',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});