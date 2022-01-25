import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Question } from './Question';

import {decode} from 'html-entities';

export const Quiz = () => {

    const navigation: any = useNavigation();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [quizData, setQuizData] = useState<any[]>([]);
    const [currQuestion, setCurrQuestion] = useState<number>(0);
    const [quizResults, setQuizResults] = useState<any[]>([]);

    const getQuestions = async () => {
        try {
            const response = await fetch(
                'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
            );
            const json = await response.json();
            console.log(json.results);
            setQuizData(json.results);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            }
    };

    useEffect(() => {
        getQuestions()
    }, []);

    const nextQuestion = (answer: string) => {

        if (answer == quizData[currQuestion].correct_answer){
            let newResults: any[] = quizResults;
            newResults.push(
                {
                    question: decode(quizData[currQuestion].question),
                    correct: true
                }
            )
            setQuizResults(newResults);
            findNext();
        } 
        else {
            let newResults: any[] = quizResults;
            newResults.push(
                {
                    question: decode(quizData[currQuestion].question),
                    correct: false
                }
            )
            setQuizResults(newResults);
            findNext();
        };
    };

    const findNext = () => {
        if ((currQuestion + 1) < quizData.length){
            setCurrQuestion(currQuestion + 1);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        let tally = 0;
        quizResults.map((q) => {
            if (q.correct){
                tally++
            }
        })
        navigation.navigate('Results', {
            numCorrect: tally,
            totalNum: quizResults.length,
            results: quizResults
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {!loading ?
                <>
                {error ?
                    <View>
                        <Text>
                            There was an error loading the quiz. Please press to refresh.
                        </Text>
                        <Pressable onPress={() => setError(false)}>
                            <Text>
                                Refresh
                            </Text>
                        </Pressable>
                    </View>
                :
                <Question 
                    category={quizData[currQuestion].category}
                    type={quizData[currQuestion].type}
                    difficulty={quizData[currQuestion].difficulty}
                    question={quizData[currQuestion].question}
                    currQuestion={currQuestion + 1}
                    totalQuestions={quizData.length}
                    correct_answer={quizData[currQuestion].correct_answer}
                    incorrect_answers={quizData[currQuestion].incorrect_answer}
                    toNext={nextQuestion}
                />
                }
                </>
            :
                <ActivityIndicator />
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});