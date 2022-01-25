import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

import {decode} from 'html-entities';

interface QuestionType {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    currQuestion: number,
    totalQuestions: number,
    correct_answer: string,
    incorrect_answers: [string],
    toNext: any
}

export const Question: React.FC<QuestionType> = (props: QuestionType) => {

    const [selectedAnswer, setSelectedAnswer] = useState('')

    const submitAnswer = (answer: string) => {
        props.toNext(answer);
    }

    return (
        <View style={styles.container}>
            <View style={styles.categoryBox}>
                <Text style={styles.category}>
                    {decode(props.category)}
                </Text>
            </View>
            <View style={styles.questionView}>
                <View style={styles.questionBox}>
                    <Text style={styles.question}>
                        {decode(props.question)}
                    </Text>
                </View>
                <Text style={styles.progress}>
                    {props.currQuestion} of {props.totalQuestions}
                </Text>
            </View>
            <View style={styles.answerBox}>
                <Pressable onPress={()=>submitAnswer('True')}>
                    <View style={styles.answer}>
                        <Text style={styles.answerText}>
                            True
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>submitAnswer('False')}>
                    <View style={styles.answer}>
                        <Text style={styles.answerText}>
                            False
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>

        // <View>
        //     <Text>
        //         Yello 
        //     </Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    categoryBox: {
        height: "20%"
    },
    category: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    questionView: {
        marginBottom: 50
    },
    questionBox: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20
    },
    question: {
        width: '80%',
        fontSize: 25,
        textAlign: 'center'
    },
    progress: {
        textAlign: 'center',
        fontSize: 20
    },
    answerBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    answer: {
        height: 100,
        width: 150,
        backgroundColor: 'black',
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerText: {
        color: 'white',
        fontSize: 20
    }
});