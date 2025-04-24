import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Task({ task, onDelete }) {
    return (
        <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{task.title}</Text>
            <TouchableOpacity onPress={() => onDelete(task.id)}>
                <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}
