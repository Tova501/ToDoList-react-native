import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddTask({ route, navigation }) {
    const { addTask } = route.params; 
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() === '') {
            Alert.alert('Error', 'Task name cannot be empty');
            return;
        }

        const newTask = { id: Date.now(), title: taskName };
        addTask(newTask); 
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter task name"
                    value={taskName}
                    onChangeText={setTaskName}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Add Task" onPress={handleAddTask} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'transparent'
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    buttonContainer: {
        position: 'absolute', 
        bottom: 50, 
        width: '80%', 
    },
});
