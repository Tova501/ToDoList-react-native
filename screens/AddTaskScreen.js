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
            <TextInput
                style={styles.input}
                placeholder="Enter task name"
                value={taskName}
                onChangeText={setTaskName}
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
