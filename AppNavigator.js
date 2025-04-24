import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddTask from './screens/AddTaskScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddTask" component={AddTask} />
        </Stack.Navigator>
    );
}
