import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskList from '../components/TaskList';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        };
        loadTasks();
    }, []);

    const addTask = async (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TaskList tasks={tasks} onDelete={deleteTask} />
            <Button title="Add Task" onPress={() => navigation.navigate('AddTask', { addTask })} />

        </View>
    );
}
