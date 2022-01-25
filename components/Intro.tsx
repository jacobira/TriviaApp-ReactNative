import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Pressable,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Intro = () => {

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>
                    Welcome to the Trivia Challenge!
                </Text>
                <Text style={styles.description}>
                    You will be presented with 10 True or False questions.
                </Text>
                <Text style={styles.description}>
                    Can you score 100%?
                </Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=>navigation.navigate('Quiz')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Begin
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontSize: 25,
        textAlign: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 75,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});