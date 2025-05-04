import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Task({ task, onDelete }) {
    return (
        <View style={{ 
            padding: 15, 
            borderBottomWidth: 1, 
            borderBottomColor: '#ccc', 
            backgroundColor: 'rgba(0, 0, 0, 0.7)' 
        }}>
            <Text style={{ color: 'white' }}>{task.title}</Text> 
            <TouchableOpacity onPress={() => onDelete(task.id)}>
                <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}
