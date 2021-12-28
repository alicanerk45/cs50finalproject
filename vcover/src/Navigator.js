import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './pages/forgot';
import Survey from './pages/survey';
import Results from './pages/results';

const Stack = createStackNavigator();

const options = () => {
    return {
        headerShown: false,
    };
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={options}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={options}
                />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={options}
                />
                <Stack.Screen
                    name="Survey"
                    component={Survey}
                    options={options}
                />

                <Stack.Screen
                    name="Results"
                    component={Results}
                    options={options}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
