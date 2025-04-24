import React from 'react';
import { View, FlatList } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
    return (
        <View>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Task task={item} onDelete={onDelete} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default TaskList;
